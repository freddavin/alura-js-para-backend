'use strict';

function lonelyinteger(a) {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        a.forEach(num => {
            if (num === a[i]) {
                count++;
            }
        });
        if (count !== 2) {
            return a[i];
        }
    }
}

const a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));