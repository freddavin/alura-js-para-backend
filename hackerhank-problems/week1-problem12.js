'use strict';

function strings_xor(s, t) {
    let res = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t[i])
            res += '0';
        else
            res += '1';
    }
    return res;
}

const s = "10101";
const t = "00101";
console.log(strings_xor(s, t));