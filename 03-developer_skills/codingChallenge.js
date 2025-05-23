"use strict";

/**
 * Given an array of forecasted maximum temperatures, the thermometer displays
 * a string with these temperatures.
 * 
 * Example: [17, 21, 23] will output: "... 17°C in 1 days ... 21°C in 2 days 
 * ... 23°C in 3 days ..."
 * 
 * Create a function "printForecast" which takes in an array "arr" and logs a
 * string like that to the console.
 * Use the problem solving framework: Understand the problem and break it up 
 * into sub-problems!
 * 
 * TEST DATA 1: [17, 21, 23]
 * TEST DATA 2: [12, 5, -5, 0, 4]
 */

const printForecast = (arr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++)
        str += `... ${arr[i]}°C in ${i + 1} days `;

    return str + "...";
}

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.log(printForecast(testData1));
console.log(printForecast(testData2));

// 1. Understand the problem
// How to add "..." in the beginning and end of the string?
// How to keep track of days?

// 2. Break into sub problems
// transform each element to string with °C.
// string must contain day.
// add "..." at the end of the string.
// log string to console.