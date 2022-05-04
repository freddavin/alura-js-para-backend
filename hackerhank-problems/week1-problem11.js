'use strict';

function birthday(s, d, m) {
    let numWays = 0;
    for (let i = 0; i < s.length; i++) {    
        let sum = 0;
        for (let y = i; y < i + m; y++) {
            sum += s[y];
        }
        if (sum === d) {
            numWays++;
        }
    }
    //console.log(sum);
    //console.log(numWays);
    return numWays;
}

//const s = [2, 2, 1, 3, 2];
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;
console.log(birthday(s, d, m));