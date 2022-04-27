const alunos = ["Fred", "Laliny", "Diego", "Regina"];
const mediaNotas = [2, 9, 5, 9.5];
const matNotas = [alunos, mediaNotas];
console.log(matNotas);

// FILTER
const reprovados = matNotas[0].filter((aluno, indice) => matNotas[1][indice] < 6);
console.log(`Reprovados: ${reprovados}`);

//REDUCE
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasSala) {
	//const somaNotas = notasSala.reduce((acumulador, atual) => acumulador + atual, 0);
	const soma = notasSala.reduce(somaNotas, 0);
	return soma / notasSala.length;
}

function somaNotas(acumulador, atual) {
	return acumulador + atual;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

const notas = [10, 8, 8, 6];

const media = notas.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(media/notas.length);