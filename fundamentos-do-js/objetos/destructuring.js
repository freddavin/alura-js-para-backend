const grupo1 = ["fred", "luis", "caique"];
const grupo2 = ["laliny", "regina"];

//const todoMundo = [grupo1, grupo2];
const todoMundo = [...grupo1, ...grupo2];
console.log(todoMundo);

//const [num1, num2] = [1, 2];
//const [num1, num2] = [1, 2, 3, 4];
const [num1, num2, ...numResto] = [1, 2, 3, 4];
console.log(num1, num2, numResto);

const pessoa = {
    nome: "Fred",
    idade: 31
}

const pessoaTelefone = {
    ...pessoa,
    telefone: "35998604070"
}

console.log(pessoa);
console.log(pessoaTelefone);

const {nome} = pessoa;
console.log(nome);

