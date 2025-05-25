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