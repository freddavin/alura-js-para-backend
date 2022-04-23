let vetNotas = [10, 6, 8];
console.log("Original:");
console.log(vetNotas);

// PUSH - ADICIONAR AO FIM 
vetNotas.push(7);
console.log("PUSH:");
console.log(vetNotas);

// UNSHIFT - ADICIONAR NO INICIO
vetNotas.unshift(1);
console.log("UNSHIFT:");
console.log(vetNotas);

// POP - REMOVER O ÚLTIMO 
vetNotas.pop();
console.log("POP:");
console.log(vetNotas);

// SHIFT - REMOVER O PRIMEIRO
vetNotas.shift();
console.log("SHIFT:");
console.log(vetNotas);

console.log("---------------------");

// CONCAT - CONCATENAR ARRAYS
let vetNotas2 = [5, 6, 7];
let vetNotasConcat = vetNotas.concat(vetNotas2);
console.log(vetNotas);
console.log(vetNotasConcat);



// SLICE
let turma1 = ["João", "Marcelo", "Renata", "Juliana", "Diego", "Fred", "Laliny", "Marcos", "Priscilla", "Cardoso", "Regina", "Suely", "Felipe", "Ferreira"];
let turma2 = turma1.slice(turma1.length / 2); 
turma1 = turma1.slice(0, turma1.length / 2); // exclusivo ele nao pega o valor final informado
console.log(turma1);
console.log(turma2);

// FILTER
let turma = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
console.log(turma);
let turmaNova = turma.filter(i => i !== "Ana" && i !== "Caio");
turmaNova.push("Rodrigo");
console.log(turmaNova);

// SPLICE
// Pode ser usado para adicionar elemento em qualquer lugar do array. So colocar 0 no segundo parametro.
turmaNova.splice(2, 0, "Fred");
console.log(turmaNova);