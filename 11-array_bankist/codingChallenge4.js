/**
 * This time, Julia and Kate are studying the activity levels of different dog
 * breeds.
 * YOUR TASKS:
 * 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
 *
 * 2. Find the name of the only breed that likes both "running" and "fetch"
 * ("dogBothActivities" variable)
 *
 * 3. Create an array "allActivities" of all the activities of all the dog
 * breeds.
 *
 * 4. Create an array "uniqueActivities" that contains only the unique
 * activities (no activity repetitions).
 *
 * HINT: Use a technique with a special data structure that we studied a few
 * sections ago.
 *
 * 5. Many dog breeds like to swim. What other activities do these dogs like?
 * Store all the OTHER activities these breeds like to do, in a unique array
 * called "swimmingAdjacent".
 *
 * 6. Do all the breeds have an average weight of 10kg or more? Log to the
 * console whether "true" or "false".
 *
 * 7. Are there any breeds that are "active"? "Active" means that the dog has
 * 3 or more activities. Log to the console whether "true" or "false".
 *
 * BONUS: What's the average weight of the heaviest breed that likes to fetch?
 * HINT: Use the "Math.max" method along with the ... operator.
 */

const breeds = [
    {
        breed: "German Shepherd",
        averageWeight: 32,
        activities: ["fetch", "swimming"],
    },
    {
        breed: "Dalmatian",
        averageWeight: 24,
        activities: ["running", "fetch", "agility"],
    },
    {
        breed: "Labrador",
        averageWeight: 28,
        activities: ["swimming", "fetch"],
    },
    {
        breed: "Beagle",
        averageWeight: 12,
        activities: ["digging", "fetch"],
    },
    {
        breed: "Husky",
        averageWeight: 26,
        activities: ["running", "agility", "swimming"],
    },
    {
        breed: "Bulldog",
        averageWeight: 36,
        activities: ["sleeping"],
    },
    {
        breed: "Poodle",
        averageWeight: 18,
        activities: ["agility", "fetch"],
    },
];

// 1.
// a. store the average husky weight in "huskyWeight"
const huskyWeight = breeds
    .filter(breed => breed.breed === "Husky") 
    .flatMap(breed => breed.averageWeight)[0];
console.log(huskyWeight);

// 2.
// a. Find the name of the only breed that likes both "running" and "fetch".
// b. store in "dogBothActivities" variable
const dogBothActivities = breeds
    .filter(breed =>
        breed.activities.includes("running") &&
        breed.activities.includes("fetch"))
    .map(breed => breed.breed)[0];
console.log(dogBothActivities);

// 3.
// a. Create an array called "allActivities"
// b. Contains all activies of the different breeds.
const allActivities = breeds.flatMap((breed) => breed.activities);
console.log(allActivities);

// 4.
// a. Create an array called "uniqueActivities"
// b. Contains only the unique
const uniqueActivities = [
    ...new Set(breeds.flatMap((breed) => breed.activities)),
];
console.log(uniqueActivities);

// 5.
// a. Store the OTHER activities that are not "swimming" in a unique array
// called "swimmingAdjacent".
const swimmingAdjacent = uniqueActivities.slice();
swimmingAdjacent.splice(swimmingAdjacent.indexOf("swimming"), 1);
console.log(swimmingAdjacent);

// 6.
// a. check if the average weight of all breeds is >= 10 kg
// b. log to the console whether "true" or "false".
const avgWeight = breeds.every(breed => breed.averageWeight >= 10);
console.log(avgWeight);

// 7.
// a. Check for active breeds. "active" means 3 or more activities.
// b. log to the console whether "true" or "false".
const activeBreeds = breeds.some(breed => breed.activities.length >= 3);
console.log(activeBreeds);
