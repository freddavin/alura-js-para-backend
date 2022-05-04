const cliente = {
    nome: "Frederico",
    idade: 31,
    cpf: "090.932.776-93",
    email: "fredericodavin@gmail.com",
    tel: "35998604070"
}

console.log(cliente.nome);

//cliente.nome = "Diego";
//console.log(cliente.nome);

console.log(cliente.cpf.substring(cliente.cpf.length - 3).padStart(14, "*"));

const chaves = ["nome", "tel"];
console.log(cliente[chaves[0]]);
console.log(cliente["tel"]);

cliente.conta = "0364-6";
console.log(cliente.conta);

delete cliente.email;
console.log(cliente);