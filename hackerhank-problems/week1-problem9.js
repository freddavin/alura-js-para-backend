'use strict';

function pangrams(s) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let arrStr = s.toLowerCase().split("");

    for (let i = 0; i < alphabet.length; i++) {
        //console.log(arrStr.includes(element));
        if (arrStr.includes(alphabet[i]) === false) {
            return "not pangram";
        }
    }
    return "pangram";
}

console.log(pangrams("a"));
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));