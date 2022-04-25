const alunos = [["Fred", "Laliny", "Diego", "Priscilla", "Regina", "Ferreira"], [9, 10, 8.5, 8, 9.5, 8]];

//console.log(alunos[0].length);

function retornaMediaFinal(nomeAluno) {
    for (let i = 0; i < alunos[0].length; i++) {
        if (alunos[0][i] === nomeAluno) {
            return `A média do(a) ${nomeAluno} é ${alunos[1][i]}.`;
        }
    }
    return "Aluno não encontrado.";
}

function retornaMediaFinal2(nomeAluno) {
    let index = alunos[0].findIndex(nome => nome === nomeAluno); // pode procurar com o método INCLUDES
    if (index >= 0) {
        return `A média do(a) ${nomeAluno} é ${alunos[1][index]}.`;
    } else {
        return "Aluno não encontrado."
    }
}

function retornaMediaFinal3(nomeAluno) {
    let index = alunos[0].indexOf(nomeAluno); 
    if (index >= 0) {
        return `A média do(a) ${nomeAluno} é ${alunos[1][index]}.`;
    } else {
        return "Aluno não encontrado."
    }
}

console.log(retornaMediaFinal("Laliny"));
console.log(retornaMediaFinal2("Laliny"));
console.log(retornaMediaFinal3("Laliny"));

// foreach

let notas = [10, 6, 8, 7];

let soma = 0;

notas.forEach(element => soma += element);

let media = soma/notas.length;
console.log(media);

// matriz for
console.log("-----------------")

let notas2 = [10, 5, 8];
let notas3 = [10, 9, 10];
let matNotas = [notas, notas2, notas3];

let somaTotal = 0;
let elementos = 0;

for (let i = 0; i < matNotas.length; i++) {
    for (let j = 0; j < matNotas[i].length; j++) {
        somaTotal += matNotas[i][j];
        elementos++;
    }
}

console.log(somaTotal / elementos);