class pessoa {
  nome: string;
  renda?: number | undefined;

  constructor(nome: string, renda?: number) {
    this.nome = nome;
    this.renda = renda;
  }

  dizOla(): string {
    return `${this.nome} disse oi`;
  }
}
// =======================

// quando usamos o privete só conseguimores alterar na class que foi criada e não herda para os filhos essa opção
// ja usando o protect conseguimos alterar o valor mesmo estando dentro de uma class filho
// public acessivel todos os niveis
// static é apenas na classe
class ContaBancaria {
  private saldo: number = 0;
  numeroConta: number;
  constructor(numeroConta: number) {
    this.numeroConta = numeroConta;
  }

  getSaldo() {
    return this.saldo;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
  depositar(valor: number): void {}
}
