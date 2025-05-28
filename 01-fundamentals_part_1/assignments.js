"use strict";

/**
 * Lecture: Values & Variables (Assignment 1)
 * 1. Declare variables called "country", "continent", and "population" and
 * assign their values according to your own country (population in the millions)
 * 2. Log their values to the console.
 */

let country = "South Africa";
let continent = "Africa";
let population = 63.21;

console.log("Country :" + country);
console.log("Continet: " + continent);
console.log("Population: " + population + " million");

/**
 * Lecture: Data Types (Assignement 2)
 * 1. Declare a variable called "isIsland" and set its value according to your
 * country. The value should hold a Boolean value. Also declare a variable
 * "language", but don't assign it any value yet.
 * 2. Log the types of "isIsland", "population", "country", and "language" to
 * the console.
 */

let isIsland = false;
let language;

console.log("Type of isIsland: " + typeof isIsland);
console.log("Type of population: " + typeof population);
console.log("Type of country: " + typeof country);
console.log("Type of language: " + typeof language);

/**
 * Lecture: let, const & var
 * 1. Set the value of "language" to the language spoken where you live.
 * 2. Think about which variables should be const variables. Then change these
 * variables to const.
 * 3. Try to change one of the changed variables and observe what happens.
 */

language = "Zulu";
const _isIsland = false;
const _continent = "Africa";
const _country = "South Africa";
// _continent = "Asia";

/**
 * Lecture: Basic Operators
 * 1. If your country split in half, and each half would contain the population,
 * then how many people would live in each half?
 * 2. Increase the population of your country by 1 and log the result to the
 * console.
 * 3. Finland has a population of 6 million. Does your country have more people
 * Finland?
 * 4. The average population of a country is 33 million people. Does your
 * country have less people than the average country?
 * 5. Based on the variables you created, create a new variable "description"
 * which contains a string with this format: "Portugal is in Europe, and it's
 * 11 million people speak portuguese"
 */

console.log(population / 2);
population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averageCountryPopulation = 33;
console.log(population > averageCountryPopulation);
let description =
    country +
    " is in " +
    continent +
    " and it's " +
    (--population).toFixed(2) +
    " million people speak " +
    language;
console.log(description);

/**
 * Lecture: Strings & Template Literals
 * 1. Recreate the "description" variable from the last assignment, this time
 * using the template literal syntax
 */

description = `${country} is in ${continent} and it's ${population.toFixed(
    2
)} million people speak ${language}`;

/**
 * 1. If your country's population is greater than 33 million, log a string
 * like this to the console: "Portugal's population is above average".
 * Otherwise log a string like this: "Portugal's population is 22 million below
 * average (the 22 is the average of 33 minus the country's population)"
 * 2. After checking the result, change the population temporarily to 13 and
 * then to 130. See the different results, and set the population back to the
 * original.
 */

population = 130

if (population > averageCountryPopulation) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(
        `${country}'s population is ${averageCountryPopulation - population
        } million below avergae.`
    );
}

/**
 * Lecture: The switch statement
 * 1. Use a switch statement to log the following string for the given
 * "language":
 * chinese or mandarin: "MOST number of native speakers!"
 * spanish: "2nd place in number of native speakers"
 * english: "3rd place"
 * hindi: "Number 4"
 * arabic: "5th most spoken language"
 * for all other languages simply log "Great language too :D"
 */

language = "mandarin";

switch (language) {
    case "mandarin":
    case "chinese":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4")
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log("Great language tooo :D");
}
