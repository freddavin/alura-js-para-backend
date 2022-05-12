const trocaItem = require('./troca.js');

class Livro {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

const precosLivros = [new Livro("JS", 25), new Livro("PHP", 15), new Livro("JAVA", 30), new Livro("ELIXIR", 50), new Livro("GO", 45), new Livro("PYTHON", 20)];


precosLivros.forEach((_, index) => {
    let atual = index;
    while (atual > 0 && precosLivros[atual].preco < precosLivros[atual - 1].preco) {
        trocaItem(precosLivros, atual, atual - 1);
        atual--;
    }
});
console.log(precosLivros);

