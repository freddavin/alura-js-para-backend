const cliente = {
    nome: "Frederico",
    idade: 31,
    cpf: "090.932.776-93",
    email: "fredericodavin@gmail.com",
    tel: ["35998604070", "3538223689"],
    dependentes: [{
        nome: "Joãozinho",
        idade: 5,
        parentesco: "Filho"
    },
    {
        nome: "Laliny",
        idade: 30,
        parentesco: "Esposa"
    }],
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    },
    tipo: [],
    adicionarTipo: function (propriedade, tipo) {
        this[propriedade].push(tipo)
    }
}

// 1
//cliente.tel.forEach(tel => console.log(tel));

// cliente.dependente = {
//     nome: "Joãozinho",
//     idade: 5,
//     parentesco: "Filho"
// }

// console.log(cliente);


// 2
// cliente.dependentes.push({
//     nome: "Laliny",
//     idade: 30,
//     parentesco: "Esposa"
// })

// console.log(cliente);

// cliente.dependentes.sort((a, b) => b.idade - a.idade);
// console.log(cliente.dependentes[0]);

// 3

console.log(cliente.saldo);
cliente.depositar(500);
cliente.sacar(200);
console.log(cliente.saldo);

cliente.adicionarTipo("tipo", "FRED");
cliente.adicionarTipo("tipo", {nome: "Fred", idade: 31});
console.log(cliente);