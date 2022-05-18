const { edFolha } = require("./arrays-desordenados");

function ordena(arr1, arr2) {
    const arrFinal = [];
    let posArr1Atual = 0;
    let posArr2Atual = 0;

    for (let i = 0; i < (arr1.length + arr2.length); i++) {
        if (posArr1Atual < arr1.length && posArr2Atual < arr2.length) {
            if (arr1[posArr1Atual].preco <= arr2[posArr2Atual].preco) {
                arrFinal.push(arr1[posArr1Atual]);
                posArr1Atual++;
            } else {
                arrFinal.push(arr2[posArr2Atual]);
                posArr2Atual++;
            }
        } else if (posArr1Atual >= arr1.length) {
            arrFinal.push(arr2[posArr2Atual]);
            posArr2Atual++;
        } else {
            arrFinal.push(arr1[posArr1Atual]);
            posArr1Atual++;
        }
    }

    return arrFinal;
}

function mergeSort(lista, nivel = 0) {

    console.log(`Nível ${nivel}`);
    console.log(lista);

    if (lista.length > 1) {
        const primeiraMetade = Math.round(lista.length / 2);
        const listaParte1 = mergeSort(lista.slice(0, primeiraMetade), nivel + 1);
        const listaParte2 = mergeSort(lista.slice(primeiraMetade), nivel + 1);
        lista = ordena(listaParte1, listaParte2);
        console.log(lista);
    }
    return lista;
}

console.log(mergeSort(edFolha));
