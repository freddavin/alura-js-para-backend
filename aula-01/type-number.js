const numA = 4000;
const numB = 44;

const result = numA / numB;
console.log(result);

console.log(Math.round(result));
console.log(typeof Math.round(result));

console.log(result.toFixed(2));
console.log(typeof result.toFixed(2));

console.log(result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
console.log(typeof result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));

let array = [5, 2, 15, 8, 3, 4, 64];
array.sort((a, b) => a - b);
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
