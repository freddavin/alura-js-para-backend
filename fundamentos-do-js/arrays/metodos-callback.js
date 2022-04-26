const nomes = ["Fred", "Laliny", "Diego", "Priscilla"];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome, index) {
    console.log(`nomes[${index}] = ${nome}`);
}


const notas = [10, 9, 8, 7, 6];

// notas.forEach((nota, index, array) => {
//     if (nota < 10) {
//         array[index] = nota + 1;
//     }
// })

notas.forEach((nota, index) => {
    if (nota < 10) {
        notas[index] = nota + 1;
    }
})

console.log(notas);

// callback map()

// const notasAtualizadas = notas.map(nota => nota < 10 ? ++nota : nota);

const notasAtualizadas = notas.map(nota => {
    if (nota < 10) {
        return ++nota;
    } else {
        return nota;
    }
});

console.log(notasAtualizadas);

const nomesDesorganizados = ["FREd dAvin", "laliNY UCHOA", "DIegO AméRIco"];

const nomesOrganizados = nomesDesorganizados.map(nome => nome.toUpperCase());
console.log(nomesOrganizados);

// map com string

// let nome = "fREDERICO";

// let nomeMod = nome.map((n, index) => {
//     if (index = 0) {
//         return n.toUpperCase();
//     } else {
//         return n.toLowerCase();
//     }
// })

// console.log(nomeMod);

// RESPOSTA: NÃO!


// com map // retorna
const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
   return num * 10; 
}

const arrayNovo = arrayNums.map(multiplicaPorDez);

console.log(arrayNovo);

// com foreach // nao modifica
let arrayNums2 = [1, 2, 3, 4];

function multiplicaPorDez2(num, index) {
    arrayNums2[index] = num * 10; 
}

arrayNums2.forEach(multiplicaPorDez2);

console.log(arrayNums2);