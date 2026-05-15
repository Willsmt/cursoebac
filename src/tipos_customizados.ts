type aluno = {
  nome: string;
  cursos?: string[];
  idade: number;
};

const alunos: aluno[] = [
  {
    nome: "carlos",
    cursos: ["front-end", "UX/UI"],
    idade: 26,
  },
  {
    nome: "ana",
    cursos: ["back-end", "python"],
    idade: 21,
  },
];

alunos.push({
  nome: "julia",
  cursos: ["Arquitetura"],
  idade: 22,
});

const novoAluno: aluno = {
  nome: "lucas",
  idade: 32,
};

function exibeAluno(aluno: aluno) {
  console.log(aluno.nome);
}
