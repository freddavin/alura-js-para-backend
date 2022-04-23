// tipo de dados 

// conversao implicita

const numA = 456;
let numB = "456";
let numC = "456a";

console.log(numA == numB); // true => conversao implicita do JS
console.log(numA === numB); // false
console.log(numA + numB);

// conversao explicita

// Number()
// String()

console.log(typeof Number(numB));
console.log(numA + Number(numB));

numB = Number(numB);
console.log(typeof numB);

numC = Number(numC);
console.log(numC);