

```markdown
# Exercício de Abstração e Herança em JavaScript

Este projeto demonstra o uso de **funções construtoras** e **herança** em JavaScript sem utilizar recursos ES6+.  
O objetivo é criar uma classe de abstração, duas classes herdeiras e instanciar objetos a partir delas.

---

## 📌 Estrutura do Código

### Classe base (abstração)
```js
function Animal(nome) {
  this.nome = nome;

  this.dizNome = function () {
    console.log("Meu nome é " + this.nome);
  };

  this.dizTipo = function () {
    console.log("Eu sou um " + this.tipo);
  };
}
```

### Classes herdeiras
```js
function Cachorro(nome, raca) {
  this.tipo = "Cachorro";
  this.raca = raca;

  Animal.call(this, nome); // herda de Animal
}

function Gato(nome, cor) {
  this.tipo = "Gato";
  this.cor = cor;

  Animal.call(this, nome); // herda de Animal
}
```

### Instâncias de objetos
```js
const cachorro1 = new Cachorro("Rex", "Labrador");
const cachorro2 = new Cachorro("Bolt", "Pastor Alemão");
const gato1 = new Gato("Mimi", "Branco");

cachorro1.dizNome(); // Meu nome é Rex
cachorro1.dizTipo(); // Eu sou um Cachorro

cachorro2.dizNome(); // Meu nome é Bolt
cachorro2.dizTipo(); // Eu sou um Cachorro

gato1.dizNome();     // Meu nome é Mimi
gato1.dizTipo();     // Eu sou um Gato
```

---

## 🚀 Conceitos aplicados
- **Abstração**: A classe `Animal` define atributos e métodos comuns.
- **Herança**: `Cachorro` e `Gato` usam `Animal.call(this, nome)` para herdar os métodos e atributos.
- **Instâncias**: Foram criados três objetos (`cachorro1`, `cachorro2`, `gato1`) que utilizam os métodos herdados.

---

## 📂 Como executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abra o arquivo `.js` em qualquer editor ou execute com Node.js:
   ```bash
   node index.js
   ```

---

## ✨ Resultado esperado
```
Meu nome é Rex
Eu sou um Cachorro
Meu nome é Bolt
Eu sou um Cachorro
Meu nome é Mimi
Eu sou um Gato
```

---

## 📖 Aprendizado
Este exercício mostra como implementar herança em JavaScript usando funções construtoras e `call`, sem depender de sintaxe moderna (`class`, `extends`).  
É útil para entender como o JavaScript funcionava antes do ES6 e como os conceitos de orientação a objetos podem ser aplicados de forma manual.
```
