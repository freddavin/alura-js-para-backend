const alunos = [["Fred", "Laliny", "Diego", "Priscilla", "Regina", "Ferreira"], [9, 10, 8.5, 8, 9.5, 8]];

//console.log(alunos[0].length);

function retornaMediaFinal(nomeAluno) {
    for (let i = 0; i < alunos[0].length; i++) {
        if (alunos[0][i] === nomeAluno) {
            return `A média do(a) ${nomeAluno} é ${alunos[1][i]}.`;
        }
    }
    return "Aluno não encontrado.";
};

function retornaMediaFinal2(nomeAluno) {
    let index = alunos[0].findIndex(nome => nome === nomeAluno); // pode procurar com o método INCLUDES
    if (index >= 0) {
        return `A média do(a) ${nomeAluno} é ${alunos[1][index]}.`;
    } else {
        return "Aluno não encontrado."
    }
};

function retornaMediaFinal3(nomeAluno) {
    let index = alunos[0].indexOf(nomeAluno); 
    if (index >= 0) {
        return `A média do(a) ${nomeAluno} é ${alunos[1][index]}.`;
    } else {
        return "Aluno não encontrado."
    }
};

console.log(retornaMediaFinal("Laliny"));
console.log(retornaMediaFinal2("Laliny"));
console.log(retornaMediaFinal3("Laliny"));