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
    return `${country} has ${population
    } million people and its capital city is ${capitalCity}`;
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
};

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
    } million people which is about ${percentageOfWorld1(population
    ).toFixed(2)}% of the world.`;

const southAfrPopDesc = describePopulation("South Africa", 61.18);
const zimPopDesc = describePopulation("Zimbabwe", 14.2);
const namPopDesc = describePopulation("Namibia", 3.05);

console.log(southAfrPopDesc);
console.log(zimPopDesc);
console.log(namPopDesc);

/**
 * Lecture: Introduction to Arrays
 * 1. Create an array containing 4 population values of 4 countries of your
 * choice. Store this array into a variable called "populations".
 * 2. Log to the console whether the array has 4 elements or not (true or false)
 * 3. Create an array called "percentages" containing the percentages of the
 * world population for these 4 populations. Use the function "percentageOfWorld1"
 * that you created earlier to compute the 4 percentage values
 */

const populations = new Array(63, 14, 393, 1441);
console.log(
    `Array ${populations.length === 4 ? "has" : "doesnt have"} 4 elements.`
);
const percentages = new Array();
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

/**
 * Lecture: Basic Array Operations (Methods)
 * 1. Create an array containing all neighbouring countries of a country of your
 * choice. Choose a country with atleast 2 or 3 neighbours. Store the array
 * into a variable called "neighbours".
 * 2. A new country called "Utopia" is created in the neighborhood of your
 * country. Add it to the end of the "neighbours" array.
 * 3. After some time, the new country is dissolved. Remove it from the end of
 * the array.
 * 4. If the "neigbours" array does not include the country "Germany", log to
 * the console: "Probably not a central European country :D".
 * 5. Change the name of one of your neighbouring countries. To do that, find
 * the index of the country in the "neighbours" array, and the use that index
 * to change the array at that index position. For example, you can search for
 * "Sweden" in the array, and then replace it with "Republic of Sweden".
 */

const neigbours = [
    "South Africa",
    "Mozambique",
    "Zambia",
    "Botswana",
    "Namibia",
];
const newCountry = "Utopia";
neigbours.push(newCountry);
console.log(neigbours);
neigbours.pop();

if (!neigbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

const renameCountry = neigbours.indexOf("Germany`");
if (renameCountry !== -1) {
    neigbours[renameCountry] = `Republic of ${neigbours[renameCountry]}`;
    console.log(neigbours);
} else {
    console.log("Error: country not found!");
    console.log(neigbours);
}

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
    neighbors: ["Lesotho", "Swaziland", "Zimbabwe", "Mozambique", "Namibia"],
};

/**
 * Lecture: Object Methods
 * 1. Add a method called "describe" to the "myCountry" object. This method will
 * log a string to the console, similar to the string logged in the previous
 * assignment, but this time using the "this" keyword.
 * 2. Call the "describe" method
 * 3. Add a method called "checkIsIsland" to the "myCountry" object. This method
 * will set a new property on the object, called "isIsland".
 * "isIsland" will be true if there are no neighbouring countries & false other
 * -wise. Use the ternary operator to set the property.
 */

myCountry.describe = function () {
    console.log(
        `${this.country} has ${this.population
        } million people and its capital city is ${this.capital}`
    );
};
myCountry.describe();
myCountry.checkIsIsland = function () {
    this.isIsland = this.neighbors.length !== 0 ? false : true;
};
myCountry.checkIsIsland();
console.log(myCountry.isIsland);

/**
 * Lecture: Iteration - the for loop
 * 1. There are elections in your country! In a small town, there are only 50
 * voters. Use a for loop to simulate the 50 people voting, by logging a string
 * to the console(for numbers 1 to 50): "Voter number 1 is currently voting."
 */

for (let i = 1; i <= 50; i++)
    console.log(`Voter number ${i} is currently voting.`);

/**
 * Lecture: Looping Backwards & Nested Loops
 * 1. Store this array of arrays into a variable called "listOfNeigbours" [
 * ["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]]
 * 2. Log only the neighbouring countries to the console, one by one, not the
 * entire arrays. Log a string like "Neighbour: Canada" for each country.
 */

const listOfNeigbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeigbours.length; i++) {
    for (let j = 0; j < listOfNeigbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeigbours[i][j]}`);
    }
}
