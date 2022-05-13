function trocaItem(lista, posAtual, posNova) {
    let aux = lista[posAtual];
    lista[posAtual] = lista[posNova];
    lista[posNova] = aux;
}

//console.log("TESTE: Fora da função");

module.exports = trocaItem;