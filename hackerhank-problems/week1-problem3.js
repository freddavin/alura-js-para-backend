'use strict';

function timeConversion(s) {
    const time = s.slice(0, s.length - 2).split(":");

    if (s.toUpperCase().endsWith("AM") && time[0] === "12") {
        let newTime = parseInt(time[0]) - 12;
        return `0${newTime}:${time[1]}:${time[2]}`;
    } else if (s.toUpperCase().endsWith("PM") && time[0] !== "12") {
        let newTime = parseInt(time[0]) + 12;
        return `${newTime}:${time[1]}:${time[2]}`;
    } else {
        return `${time[0]}:${time[1]}:${time[2]}`;
    }
}

console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:05:00AM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("12:05:00PM"));