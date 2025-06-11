/**
 * Julia and Kate are still studying dogs, and this time they are studying if
 * dogs are eating too much or too little. Eating too much means the dog's
 * current food portion is larger than the recommended portion, and eating too
 * little is the opposite.
 * Eating an okay amount means the dog's current food portion is within a range
 * 10% above and 10% below the recommended portion (see hint).
 *
 * 1. Loop over the array containing dog objects, and for each dog calculate
 * the recommended food portion and add it to the object as a new property. DO
 * NOT create a new array, simply loop over the array.
 * Formula:
 *      recommendedFood = weight ** 0.75 * 28. (The result is in grams of food
 *      and the weight needs to be in kg.)
 *
 * 2. Find Sarah's dog and log to the console whether it's eating too much or
 * too little.
 * HINT:
 *      Some dogs have multiple owners so you first need to find Sarah in the
 *      owners array, and so this one is a bit tricky (on purpose).
 *
 * 3. Create an array containing all owners of dogs who eat too much (
 * "ownersEatTooMuch") and an array with all the owners of dogs who eat too
 * little ("ownersEatTooLittle").
 *
 * 4. Log a string to the console for each array created in task 3 like this:
 * "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and
 * Michael's dog eat too little!"
 *
 * 5. Log to the console whether there is any dog eating EXACTLY the amount of
 * food that is recommended (just true or false).
 *
 * 6. Log to the console whether there is any dog eating an OKAY amount of food
 * (just true or false).
 *
 * 7. Create an array containing the dogs that are eating an OKAY amount of
 * food (try to reuse the condition used in task 6).
 *
 * 8. Create a shallow copy of the dogs array and sort it by recommended food
 * portion in an ascending order (keep in mind that the portions is inside the
 * array's object)
 *
 * HINT 1: Use many different tools to solve these challenges, you can use the
 * summary lecture to choose between them.
 * HINT 2: Being within a range 10% above and below the recommended portion
 * means:
 *      current > (recommended * 0.90) && current < (recommended * 1.10).
 * Basically the current portion should be between 90% and 110% of the
 * recommended portion.
 */

// Test Data.
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
// a. loop over dogs.
// b. calculate recommended food portion.
// c. add it as a new property.
// recommendedFood = weight ** 0.75 * 28.
dogs.forEach((dog) => {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
    console.log(dog);
});

// 2.
// a. Find Sarah's dog.
// b. log to the console whether it's eating too much or too little.
const sarahDog = dogs.find((dog) => {
    return dog.owners.includes("Sarah");
});
console.log(sarahDog);
if (sarahDog.curFood > sarahDog.recommendedFood)
    console.log(`Sarah's dog is eating too much.`);
else console.log(`Sarah's dog is eating too little.`);

// 3.
// a. create an array of dogs "ownersEatTooMuch"
// b. the dogs eat too much
// c. create an array of dogs
// d. the dogs eat too little "ownersEatTooLittle"
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .map((dog) => dog.owners)
    .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .map((dog) => dog.owners)
    .flat();
console.log(ownersEatTooLittle);

// 4.
// a. Log a string to the console for each array created in task 3
// b. "Matilda and Alice and Bob's dogs eat too much!"
// c. "Sarah and John and Michael's dog eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
// a. Log to the console if there is any dog eating exactly the recommended
// amount. (log true or false)
// b. Compare the current food with the recommended food.
const anyDog = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(anyDog);

// 6.
// a. Log to the console if there is any dog eating an OKAY amount of food
// (log true or false).
// b. find what is considered an okay amount of food. The formula below:
// current > (recommended * 0.90) && current < (recommended * 1.10);

const checkDogOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;

const okayDog = dogs.some(checkDogOkay);
console.log(okayDog);

// 7.
// a. Create an array of dogs eating an OKAY amount of food.
// b. reuse condition from task 6.
const okayDogsArr = dogs.filter(checkDogOkay);
console.log(okayDogsArr);
