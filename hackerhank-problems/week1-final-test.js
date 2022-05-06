'use strict';

// function findMedian(arr) {
//     let arrOrd = arr.sort((a , b) => a - b);
//     console.log(arrOrd);
//     if (arrOrd.length % 2 === 0) {
//         let middle = arrOrd.length / 2;
//         return (arrOrd[middle - 1] + arrOrd[middle]) / 2;
//     } else {
//         let middle = Math.floor(arrOrd.length / 2);
//         return arrOrd[middle];
//     }  
// }

// const arr = [5,3,1,2,4];
// console.log(findMedian(arr));


function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let posFirst = null;
    let posSecond = null;
    let soma = 0;
    // conferindo qual é maior das linhas
    for (let i = 0; i < matrix.length; i++) {
        let esquerda = 0;
        let direita = 0;
        for (let y = 0; y < n; y++) {
            esquerda += matrix[i][y];
        }
        for (let y = n; y < matrix.length; y++) {
            direita += matrix[i][y];
        }
        if (direita > esquerda) {
            //let aux = matrix[0][i];
            matrix[i].reverse();
        }
        console.log(`Na linha ${i}: Esquerda: ${esquerda} / Direita: ${direita}`);
        console.log(matrix);
    }
    // conferindo qual é maior das colunas
    for (let i = 0; i < n; i++) {
        let cima = 0;
        let baixo = 0;
        for (let y = 0; y < n; y++) {
            cima += matrix[y][i];
        }
        for (let y = n; y < matrix[0].length; y++) {
            baixo += matrix[y][i];
        }
        if (baixo > cima) {
            let end = matrix[0].length - 1;
            for (let y = 0; y < n; y++) {
                let aux = matrix[y][i];
                matrix[y][i] = matrix[end][i];
                matrix[end][i] = aux;
                end--;
            }
        }
        console.log(`Na coluna ${i}: Cima: ${cima} / Baixo: ${baixo}`);
        console.log(matrix);
    }

    for (let i = 0; i < n; i++) {
        for (let y = 0; y < n; y++) {
            soma += matrix[i][y];            
        }        
    }
    return soma;
}

const matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
//const matrix = [[1, 2], [0, 4]];
console.log(matrix);
console.log(flippingMatrix(matrix));