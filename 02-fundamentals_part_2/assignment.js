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

/**
 * Lecture: Functions calling other functions
 * 1. Create a function called "describePopulation". Use the function type you
 * like the most. This function takes in two arguments "country" and "population"
 * and returns a string like this: "China has 1441 million people which is about
 * 18.2% of the world."
 * 2. Call "describePopulation" with data for 3 countries of your choice.
 */

const describePopulation = (country, population) =>
    `${country} has ${population
    } million people which is about ${percentageOfWorld1(population).toFixed(2)
    }% of the world.`;

const southAfrPopDesc = describePopulation("South Africa", 61.18);
const zimPopDesc = describePopulation("Zimbabwe", 14.20);
const namPopDesc = describePopulation("Namibia", 3.05);

console.log(southAfrPopDesc);
console.log(zimPopDesc);
console.log(namPopDesc);

/**
 * Lecture: Introduction to Arrays
 */

/**
 * Lecture: Basic Array Operations (Methods)
 */

/**
 * Lecture: Introduction to Objects
 * 1. Create an object called "myCountry" for a country of your choice
 * containing properties "country", "capital", "language", "population" and
 * "neighbours" (an array)
 */

const myCountry = {
    country: "South Africa",
    capital: "Pretoria",
    language: "Zulu",
    population: 61.19,
    neighbors: ["Lesotho", "Swaziland", "Zimbabwe", "Mozambique", "Namibia"]
};

/**
 * Lecture: Dot vs Bracket Notation
 */

/**
 * Lecture: Object Methods
 */

/**
 * Lecture: Iteration - the for loop
 */

/**
 * Lecture: Looping Arrays, Breaking & Continuing
 */

/**
 * Lecture: Looping Backwards & Nested Loops
 */

/**
 * Lecture: The while loop
 */