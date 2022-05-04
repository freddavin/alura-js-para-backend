'use strict';

function diagonalDifference(arr) {
    let sumLeftRight = 0;
    let sumRightLeft = 0;

    let y = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLeftRight += arr[i][y];
        y++;
    }

    y = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sumRightLeft += arr[i][y];
        y++;
    }

    return Math.abs(sumLeftRight - sumRightLeft);
}

const mat = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log(diagonalDifference(mat));