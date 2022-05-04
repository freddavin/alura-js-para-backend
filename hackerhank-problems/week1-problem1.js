'use strict';


function plusMinus(arr) {
    const numPositive = arr.filter(num => num > 0).length;
    const numNegative = arr.filter(num => num < 0).length;
    const numZero = arr.filter(num => num === 0).length;
    
    console.log((numPositive / arr.length).toFixed(6));
    console.log((numNegative / arr.length).toFixed(6));
    console.log((numZero / arr.length).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);