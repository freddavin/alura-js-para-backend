const precosLivros = [25, 15, 30, 50, 45, 20];

for (let index = 0; index < precosLivros.length; index++) {
    let menorPreco = index;
    for (let atual = index; atual < precosLivros.length; atual++) {
        if (precosLivros[atual] < precosLivros[menorPreco]) {
            menorPreco = atual;
        }
    }
    let aux = precosLivros[index];
    precosLivros[index] = precosLivros[menorPreco];
    precosLivros[menorPreco] = aux;
}
console.log(precosLivros);