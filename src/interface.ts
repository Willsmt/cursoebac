class Conta {
  numeroDaConta: number | undefined;
  saldo: number = 0;

  constructor(numeroDaConta: number) {
    this.numeroDaConta = this.numeroDaConta;
  }
}

class contaSalario extends Conta {
  depositar(valor: number) {
    this.saldo += valor;
  }
}

interface ITransacional {
  transferir: (valor: number, destinatario: Conta) => boolean;
  taxaTransferenciaL: number;
}
interface Iexemplo2 {
  cnpj: number;
}

interface Iexemplo3 extends Iexemplo2 {
  telefone: number;
}

class ContaCorrente extends Conta implements ITransacional {
  transferir(valor: number, destinatario: Conta) {
    destinatario.saldo += valor - this.taxaTransferenciaL;
    return true;
  }
  taxaTransferenciaL: number = 0;
}
