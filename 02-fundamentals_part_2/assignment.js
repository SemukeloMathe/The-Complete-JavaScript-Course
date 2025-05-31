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
