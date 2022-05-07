function Cliente(nome, idade, email, saldo) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

const cliente = new Cliente("Fred", 31, "fred@gmail.com", 1000);
console.log(cliente);


function ClientePoupanca(nome, idade, email, saldo, saldoPoupanca) {
    Cliente.call(this, nome, idade, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const cliente2 = new ClientePoupanca("Laliny", 30, "laliny@gmail.com", 1000, 5000);
console.log(cliente2);

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
    this.saldoPoupanca += valor;
}

cliente2.depositarPoupanca(50);
console.log(cliente2);

console.log(cliente.hasOwnProperty("saldoPoupanca"))
console.log(cliente2.hasOwnProperty("saldoPoupanca"))
console.log(cliente instanceof Cliente)
console.log(cliente instanceof ClientePoupanca)
console.log(typeof cliente)
console.log(typeof cliente2)
console.log(cliente2 instanceof ClientePoupanca)
console.log(cliente2 instanceof Cliente)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)