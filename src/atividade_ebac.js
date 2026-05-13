// Classe base Aluno
class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  // Método para verificar se o aluno foi aprovado
  aprovado() {
    return this.nota >= 6;
  }
}

// Classe que herda de Aluno e pode ter funcionalidades extras
class Turma extends Aluno {
  constructor(nome, nota) {
    super(nome, nota); // chama o construtor da classe Aluno
  }
}

// Criando array de objetos (instâncias da classe Turma)
const alunos = [
  new Turma("Ana", 8),
  new Turma("Carlos", 5),
  new Turma("Beatriz", 7),
  new Turma("João", 4),
  new Turma("Mariana", 9),
];

// Função que retorna apenas os alunos aprovados
function filtrarAprovados(lista) {
  return lista.filter((aluno) => aluno.aprovado());
}

// Testando
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);
