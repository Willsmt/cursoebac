let estaChovendo: boolean = false;

estaChovendo = true;

let idade: number = 30;

let altura: number = 1.74;

const nacionalidade: string = "brasilveira";

// ===================== arrays

const colegas: string[] = ["lucas", "fernanda"];

const tecnologias: Array<string> = ["html", "css", "js"];

// array apenas para leitura

const notas: ReadonlyArray<number> = [7, 8, 9];

// metodo push, não dá para usar no readyonly

tecnologias.push();
// notas.push(), porem todos os outros funcionam

// ================================= Tupla

const lista: [string, boolean, number] = ["willians", true, 30];

const ListaAluno: [nome: string, estaEstudando: boolean, idade: number] = [
  "willians",
  true,
  30,
];

// ======================= union types

let idadeDaAna: number | string = 25;

idadeDaAna = "25 anos";
idadeDaAna = 25;

//  =========================== any - aceita qualquer coisa, precisa ser usado com sabedoria

let dadosDaApi: any;

dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = "10";
dadosDaApi = [];

// ====================================================== tipagem implicita, ele reconhece o type pelo valor
// let curso = "front-end";
// curso = 10;
