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
    population.toFixed(2) +
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
