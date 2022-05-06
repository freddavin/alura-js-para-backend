let listaClientes = [{
    nome: "Frederico",
    idade: 31,
    email: "fredericodavin@gmail.com",
    telefones: ["38223689", "998604070"],
    dependentes: [{
        nome: "Júlia",
        idade: 11
    },{
        nome: "Duda",
        idade: 10
    }]
},
{
    nome: "Laliny",
    idade: 30,
    email: "lalinyuchoa@gmail.com",
    telefones: ["999379436"],
    dependentes: [{
        nome: "Maria Eduarda",
        idade: 12
    }]
}]

// let listaDependentes = [...listaClientes[0].dependentes, ...listaClientes[1].dependentes];
// console.table(listaDependentes);

// let listaTelefones = [...listaClientes[0].telefones, ...listaClientes[1].telefones];
// console.table(listaTelefones);

let listaDependentes = [];
for (let i = 0; i < listaClientes.length; i++) {
    listaDependentes.push(...listaClientes[i].dependentes);
}
console.table(listaDependentes);

// ou

let listaTelefones = [];
listaClientes.forEach(cliente => {
    listaTelefones.push(...cliente.telefones);
});
console.table(listaTelefones);
console.log(listaTelefones);