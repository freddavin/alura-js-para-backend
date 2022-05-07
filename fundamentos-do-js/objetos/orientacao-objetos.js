class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const contaFred = new Conta("0364-6", "63844-7", 10000);
contaFred.exibirSaldo();
contaFred.depositar(5999);
contaFred.exibirSaldo();

class ContaPoupanca extends Conta {
    constructor(agencia, conta, saldo, juros){
        super(agencia, conta, saldo);
        this.juros = juros;
    }

    render() {
        this.saldo += this.saldo * this.juros;
    }
}

const contaLaliny = new ContaPoupanca("0452-1", "55222-7", 40000, 0.01);
contaLaliny.render();
contaLaliny.exibirSaldo();