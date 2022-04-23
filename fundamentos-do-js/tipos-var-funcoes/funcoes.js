// três formas de escrever funções
// 1 - declaração de função
// 2 - expressão de função
// 3 - arrow function


function calculaMedia(num1 = 0, num2 = 0) {
    return (num1 + num2) / 2;
}

//console.log(calculaMedia(10, 10));
//console.log(calculaMedia(10, 20));

let num = 0;
console.log(num);

function trocaNum() {
    num = 5;
    console.log(num);
}
trocaNum();
console.log(num);


// 1 - declaração de função (hoisting - é instanciada no inicio do programa)
function soma1(num1, num2) {
    return num1 + num2;
}
console.log(soma1(12, 5));

// 2 - expressão de função
const soma2 = function (num1, num2) { return num1 + num2 };
console.log(soma2(2, 5));

// 3 - arrow function (hoisting) / em caso de função com mais de uma linha precisa incluir chaves
const soma3 = (num1, num2) => num1 + num2;
console.log(soma3(12, 10));

const podeBeber = (nome, idade) => {
    if (idade >= 18) {
        return `Oi ${nome}, você pode beber.`;
    } else {
        return `Olá ${nome}, você não pode beber.`;
    }
}
console.log(podeBeber("Fred", 31));