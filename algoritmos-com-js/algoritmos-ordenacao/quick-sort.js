const values = [3, 8, 7, 10, 0, 23, 2, 1, 77, 7];

function trocaItem(lista, posAtual, posNova) {
    let aux = lista[posAtual];
    lista[posAtual] = lista[posNova];
    lista[posNova] = aux;
}

function dividir(lista, esquerda, direita) {
    let pivot = lista[esquerda];
    let posAnterior = esquerda;

    for (let i = esquerda + 1; i < direita; i++) {
        if (lista[i] <= pivot) {
            posAnterior++;
            trocaItem(lista, i, posAnterior);
        }
    }
    trocaItem(lista, esquerda, posAnterior);
    return posAnterior;
}

function quickSort(lista, esquerda, direita) {
    if (esquerda < direita) {
        let posAtualPivot = dividir(lista, esquerda, direita);
        quickSort(lista, 0, posAtualPivot - 1);
        quickSort(lista, posAtualPivot + 1, direita);
    }
}

quickSort(values, 0, values.length);
console.log(values);