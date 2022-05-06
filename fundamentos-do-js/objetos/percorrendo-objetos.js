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

// 2
// let relatorio = "";
// for (let info in cliente) {
//     if (typeof cliente[info] !== "object" && typeof cliente[info] !== "function") {
//         relatorio += `${info}: ${cliente[info]}\n`;
//     }
// }
// console.log(relatorio);

// 3
for (const i in cliente) {
    if (i === "dependentes") {
        console.log("Deseja oferta de seguro?");
    }
}

let keys = Object.keys(cliente); // keys
let values = Object.values(cliente); // valores da keys
let entries = Object.entries(cliente); // array com todas as keys e values
if (keys.includes("dependentes")) {
    console.log("Deseja oferta de seguro?");
}

