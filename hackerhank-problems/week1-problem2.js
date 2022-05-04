'use strict';

function miniMaxSum(arr) {
    const arrOrdMin = arr.sort((a, b) => b - a).slice(1);
    const arrOrdMax = arr.sort((a, b) => a - b).slice(1);

    const sumMax = arrOrdMax.reduce((acum, atual) => acum + atual, 0);
    const sumMin = arrOrdMin.reduce((acum, atual) => acum + atual, 0);
    
    console.log(sumMin + " " + sumMax);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);