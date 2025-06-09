/**
 * Rewrite the 'calcAverageHumanAge' function from the previous challenge, but
 * this time as an arrow function, and using chaining!
 *
 * TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
 * TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
 */

// 1. convert dogs ages to human ages.
// 2. filter out adult dogs
// 3. calculate the average.

const calcAverageHumanAge = (ages = []) => {
    const averageDogHumanAge = ages
        .map((age) => (age > 2 ? 16 + age * 4 : 2 * age))
        .filter((age) => age >= 18)
        .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

    console.log(
        `Average human age of adult dogs: ${averageDogHumanAge.toFixed(1)}`
    );
};

// test data 1
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// test data 2
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
