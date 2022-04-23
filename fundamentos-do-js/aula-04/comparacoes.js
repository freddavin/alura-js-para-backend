// comparação implícita (==)

const numA = 10;
const textoA = "10";

console.log(numA == textoA); //true
console.log(numA === textoA); //false

// boas praticas fala pra usar conversao explicita (number() / string()) e usar comparação com === (três iguais)

// operador ternário
let idadeAtual = 31;
const idadeMin = 18;

console.log(idadeAtual >= idadeMin ? "Pode beber." : "Não pode beber");