let vetNotas = [10, 6, 8];

function mediaNotas(notas) {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];        
    }
    return `A média é: ${somaNotas / notas.length}`;
}

console.log(vetNotas);
console.log(mediaNotas(vetNotas));

// ARRAY VAZIO
let vetVazio =[,,,];
console.log(vetVazio);
console.log(vetVazio.length);
vetVazio.push(50);
vetVazio[1] = 10;
console.log(vetVazio);
console.log(vetVazio.length);