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

// bind - copiar função com as informações do this anterior (ligar)
// apply - chamar função passando o objeto e um array com as informações
// call - chamar função passando o objeto como parametro

class Cliente {
    constructor(nome, idade, email, cpf, conta) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.cpf = cpf;
        this.conta = [conta];
    }
}

const clienteFred = new Cliente("Fred", 31, "fred!@gmail.com", "09093277693", contaFred);
console.log(clienteFred);

class ClienteEspecial extends Cliente {
    constructor(nome, idade, email, cpf, conta, tipoCartao) {
        super(nome, idade, email, cpf, conta);
        this.tipoCartao = tipoCartao;
    }
}

const clienteLaliny = new ClienteEspecial("Laliny", 30, "la@gmail.com", "09568432594", contaLaliny, "Black");
console.log(clienteLaliny);


const cota = [1];
cota.push(2)
console.log(cota);