const trocaItem = require('./troca.js');
//console.log(trocaItem);

class Livro {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const precosLivros = [new Livro("JS", 25), new Livro("PHP", 15), new Livro("JAVA", 30), new Livro("ELIXIR", 50), new Livro("GO", 45), new Livro("PYTHON", 20)];

// for (let index = 0; index < precosLivros.length; index++) {
//     let menorPreco = index;
//     for (let atual = index; atual < precosLivros.length; atual++) {
//         if (precosLivros[atual] < precosLivros[menorPreco]) {
//             menorPreco = atual;
//         }
//     }
//     let aux = precosLivros[index];
//     precosLivros[index] = precosLivros[menorPreco];
//     precosLivros[menorPreco] = aux;
// }
// console.log(precosLivros);

// for (let index = 0; index < precosLivros.length; index++) {
//     let menorPreco = index;
//     for (let atual = index; atual < precosLivros.length; atual++) {
//         if (precosLivros[atual].preco < precosLivros[menorPreco].preco) {
//             menorPreco = atual;
//         }
//     }
//     let aux = precosLivros[index];
//     precosLivros[index] = precosLivros[menorPreco];
//     precosLivros[menorPreco] = aux;
// }
// console.log(precosLivros);


precosLivros.forEach((_, index) => {
    let menorPreco = index;
    for (let atual = index; atual < precosLivros.length; atual++) {
        if (precosLivros[atual].preco < precosLivros[menorPreco].preco) {
            menorPreco = atual;
        }
    }
    trocaItem(precosLivros, menorPreco, index);
});
console.log(precosLivros);


// // teste de for in e for of
// // const obj = {
// //     nome: "Fred",
// //     idade: 31,
// //     [Symbol.iterator]: function*() {
// //         yield this.nome;
// //         yield this.idade;
// //     }
// // }

// // for (const key of obj) {
// //     console.log(key);
// // }