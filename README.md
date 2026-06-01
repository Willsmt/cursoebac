
# 📒 Agenda de Contatos - Testes Cypress

Este repositório contém testes automatizados para a aplicação [Agenda de Contatos](https://ebac-agenda-contatos-tan.vercel.app/), desenvolvidos com **Cypress**.  
O objetivo é validar funcionalidades principais como adicionar, editar e excluir contatos.

---

## 🚀 Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) — framework de testes end-to-end
- Node.js — ambiente de execução
- npm ou yarn — gerenciador de pacotes

---

## 📂 Estrutura dos testes
- `criarContato(nome, email, telefone)` → função auxiliar para adicionar contatos
- `removerTodosContatos()` → função auxiliar para limpar a agenda antes de cada teste
- Testes implementados:
  - Renderização dos inputs
  - Adição de contato
  - Exclusão de contato específico
  - Edição e alteração de contato

---

## ⚙️ Instalação e execução

Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

Instale as dependências:
```bash
npm install
```

Execute os testes em modo interativo:
```bash
npx cypress open
```

Ou em modo headless:
```bash
npx cypress run
```

---

## 🧪 Exemplos de testes

### Adicionar contato
```js
criarContato("Willians", "teste@teste.com", "11999999999");
cy.contains("Willians").should("be.visible");
```

### Excluir contato
```js
cy.contains("João").closest(".contato").find(".delete").click();
cy.contains("João").should("not.exist");
```

### Editar contato
```js
cy.contains("Willians").closest(".contato").find(".edit").click();
cy.get('[type="text"]').clear().type("Willians Alterado");
cy.get(".alterar").click();
cy.contains("Willians Alterado").should("be.visible");
```

---

## 📌 Observações
- Cada teste é independente, pois a agenda é limpa antes de cada execução.
- Os seletores utilizam `.closest(".contato")` para garantir que o botão correto seja acionado quando há múltiplos contatos.
- Recomenda-se rodar os testes sempre em ambiente limpo para evitar inconsistências.

---

## 👨‍💻 Autor
- **Willians**  
- Projeto de estudo com Cypress para validação de aplicações web.
```
