'use strict';

function createArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(0);
    }
    return arr;
}

function countingSort(arr) {
    let arrFrq = createArray();
    //console.log(arrFrq);

    for (let i = 0; i < arr.length; i++) {
        arrFrq[arr[i]]++; 
    }
    //console.log(arrFrq);
    return arrFrq;

    // let arrSorted = [];
    // for (let i = 0; i < arrFrq.length; i++) {
    //     for (let y = 0; y < arrFrq[i]; y++) {
    //         arrSorted.push(i);            
    //     }
    // }
    //console.log(arrSorted);
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));