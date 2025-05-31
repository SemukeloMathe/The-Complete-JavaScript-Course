"use strict";

/**
 * Lecture: Functions
 * 1. Write a function called "describeCountry" which takes three parameters
 * "country", "population", & "capitalCity". Based on this input, the function
 * returns a string in this format: "Finland has 6 million people and its 
 * capital city is Helsinki".
 * 2. Call the function 3 timed with input data for 3 different countries.
 * Store the returned valies in 3 different variables and log them to the
 * console.
 */

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const southAfricaDescr = describeCountry("South Africa", 61.19, "Pretoria");
const zimbabweDescr = describeCountry("Zimbabwe", 14.2, "Harare");
const namibiaDescr = describeCountry("Namibia", 61.19, "Windhoek");

console.log(southAfricaDescr);
console.log(zimbabweDescr);
console.log(namibiaDescr);

/**
 * Lecture: Function Declaration vs Function Expression
 * 1. The world population is 7900 million people. Create a function declaration
 * called "percentageOfWorld1" which receives a "population" value  and returns
 * the percentage of the world population that the given population represents.
 * 2. Call "percentageOfWorld1" for 3 populations of countries of your choice,
 * store the results in a variable and log to the console.
 * 3. Create a function expression which does the exact same thing called
 * "percentageOfWorld2" and call it with 3 country populations.
 */

// function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const southAfricaPer = percentageOfWorld1(61.18).toFixed(2);
const zimbabwePer = percentageOfWorld1(14).toFixed(2);
const namibiaPer = percentageOfWorld1(3).toFixed(2);

console.log(southAfricaPer);
console.log(zimbabwePer);
console.log(namibiaPer);

// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const mozambiquePer = percentageOfWorld1(7).toFixed(2);
const zambiaPer = percentageOfWorld1(8).toFixed(2);
const malawiPer = percentageOfWorld1(10).toFixed(2);

console.log(mozambiquePer);
console.log(zambiaPer);
console.log(malawiPer);

/**
 * Lecture: Arrow Functions
 * 1. Recreate the last assignment but this time create an arrow function 
 * called "percentageOfWorld3"
 */

const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}

const kenyaPer = percentageOfWorld1(33).toFixed(2);
const angolaPer = percentageOfWorld1(15).toFixed(2);
const tanzaniaPer = percentageOfWorld1(44).toFixed(2);

console.log(kenyaPer);
console.log(angolaPer);
console.log(tanzaniaPer);
