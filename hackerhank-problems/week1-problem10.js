'use strict';

function twoArrays(k, A, B) {
    let inverseA = A.sort((a, b) => a - b)
    let inverseB = B.sort((a, b) => b - a)
    for (let i in inverseA) {
        if (inverseA[i] + inverseB[i] < k) {
            return 'NO';
        }
    }
    return 'YES';

}

let A = [0, 1]; // 0 1
let B = [0, 2]; // 2 0
console.log(twoArrays(1, A, B));
console.log("------");

A = [2, 1, 3]; // 2 1 3   2 1 3
B = [7, 8, 9]; // 8 7 9   8 9 7 
console.log(twoArrays(10, A, B));
console.log("------");

A = [1, 2, 2, 1]; // 1 2 2 1   1 2 2 1
B = [3, 3, 3, 4]; // 4 3 3 3   NO
console.log(twoArrays(5, A, B));
console.log("------");

A = [20, 1]; // 20 1
B = [1, 1];  // NO
console.log(twoArrays(4, A, B));
console.log("------");
