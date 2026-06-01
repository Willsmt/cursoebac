/// <reference types="cypress" />

const criarContato = (nome, email, telefone) => {
  cy.get('[type="text"]').clear().type(nome);
  cy.get('[type="email"]').clear().type(email);
  cy.get('[type="tel"]').clear().type(telefone);
  cy.contains("Adicionar").click();
};

const removerTodosContatos = () => {
  cy.get("body").then(($body) => {
    if ($body.find(".delete").length > 0) {
      cy.get(".delete").first().click();
      removerTodosContatos(); // Recursão limpa e segura
    }
  });
};

describe("Testes para a home - Agenda de Contatos", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
    removerTodosContatos();
  });

  it("Deve renderizar 3 inputs", () => {
    cy.get("input").should("have.length", 3);
  });

  it("Deve preencher os campos e adicionar um contato", () => {
    criarContato("Willians", "teste@teste.com", "11999999999");

    cy.contains("Willians").should("be.visible");
    cy.contains("teste@teste.com").should("be.visible");
    cy.contains("11999999999").should("be.visible");
  });

  it("Deve excluir um contato específico", () => {
    criarContato("João", "joao@teste.com", "111111111");
    criarContato("Maria", "maria@teste.com", "222222222");

    cy.contains("João").closest(".contato").find(".delete").click();

    cy.contains("João").should("not.exist");
    cy.contains("Maria").should("be.visible");
  });

  it("Deve editar um contato específico", () => {
    criarContato("Willians", "teste@teste.com", "123456789");

    cy.contains("Willians").closest(".contato").as("contatoAlvo");
    cy.get("@contatoAlvo").find(".edit").click();

    cy.get('[type="text"]').clear().type("Willians Alterado");
    cy.get('[type="email"]').clear().type("novo@teste.com");
    cy.get('[type="tel"]').clear().type("987654321");
    cy.get(".alterar").click();

    cy.get("@contatoAlvo").within(() => {
      cy.contains("Willians Alterado").should("be.visible");
      cy.contains("novo@teste.com").should("be.visible");
      cy.contains("987654321").should("be.visible");
    });
  });
});
