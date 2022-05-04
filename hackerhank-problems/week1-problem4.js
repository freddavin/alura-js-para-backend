'use strict';


function matchingStrings(strings, queries) {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(strings.filter(s => s.trim() === queries[i].trim()).length);
    }
    return result;
}

const strings = ["ab"," ab","abc"];
const queries = ["ab"," abc"," bc"];
console.log(matchingStrings(strings, queries));
console.log(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]));