const { edFolha, edGalho } = require("./arrays");

function juntarLista(arr1, arr2) {
    const arrFinal = [];
    let posArr1Atual = 0;
    let posArr2Atual = 0;
    //let posArrFinalAtual = 0;

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
        //posArrFinalAtual++;
    }

    return arrFinal;
}
console.log(juntarLista(edFolha, edGalho));