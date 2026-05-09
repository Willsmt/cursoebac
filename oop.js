// Função construtora base (abstração)
function Animal(nome) {
  this.nome = nome;

  this.dizNome = function () {
    console.log("Meu nome é " + this.nome);
  };

  this.dizTipo = function () {
    console.log("Eu sou um " + this.tipo);
  };
}

//  Cachorro
function Cachorro(nome, raca) {
  this.tipo = "Cachorro";
  this.raca = raca;

  Animal.call(this, nome); // herda de Animal
}

//  Gato
function Gato(nome, cor) {
  this.tipo = "Gato";
  this.cor = cor;

  Animal.call(this, nome); // herda de Animal
}

// Instâncias de objetos
const cachorro1 = new Cachorro("Rex", "Labrador");
const cachorro2 = new Cachorro("Bolt", "Pastor Alemão");
const gato1 = new Gato("Mimi", "Branco");

// Chamando métodos
cachorro1.dizNome(); // Meu nome é Rex
cachorro1.dizTipo(); // Eu sou um Cachorro

cachorro2.dizNome(); // Meu nome é Bolt
cachorro2.dizTipo(); // Eu sou um Cachorro

gato1.dizNome(); // Meu nome é Mimi
gato1.dizTipo(); // Eu sou um Gato
