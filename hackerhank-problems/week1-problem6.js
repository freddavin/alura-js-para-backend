

function flippingBits(n) {
    let bin = n.toString(2).split("");
    console.log(bin);
    bin = bin.map(num => num === "0" ? "1" : "0");
    console.log(bin);
    bin = bin.reduce((acum, atual) => acum + atual, "");
    console.log(bin);
    bin = bin.padStart(32, 1);
    console.log(bin);
    let arrayBin = bin.split("");
    arrayBin.reverse();
    console.log(arrayBin);

    const pos = [];
    for (let i = 0; i < arrayBin.length; i++) {
        if (arrayBin[i] === "1") {
            pos.push(i);
        }
    }
    console.log(pos);

    let num = 0;
    for (let i = 0; i < pos.length; i++) {
        num += Math.pow(2, pos[i]);
    }
    return num;
}

console.log(flippingBits(1));