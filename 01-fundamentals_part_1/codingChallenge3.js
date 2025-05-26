"use strict";

/**
 * 1. Calculate the average score for each team using the test data below.
 * 2. Compare the team's average scores to determine the winner of the
 * competition and print it to the console. Don't forget that there can be a
 * draw, so test for that as well.
 * 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule
 * a team only wins if it has a higher score than the other team and the score
 * of at least 100 points.
 * 4. BONUS 2: Minimum score also applies to a draw! A draw only happens when
 * both teams have the same score and both have a score greater or equal to
 * 100 points.
 *
 * Test Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
 * Test Data 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
 * Test Data 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
 */

// Test Data 1
// let dolphinsAverageScore = (96 + 108 + 89) / 3;
// let koalasAverageScore = (88 + 91 + 110) / 3;

// Test Data 2
// let dolphinsAverageScore = (97 + 112 + 101) / 3;
// let koalasAverageScore = (109 + 95 + 123) / 3;

// Test Data 3
let dolphinsAverageScore = (97 + 112 + 101) / 3;
let koalasAverageScore = (109 + 95 + 106) / 3;

console.log(
    `Dolphins: ${dolphinsAverageScore.toFixed(
        2
    )}, Koalas: ${koalasAverageScore.toFixed(2)}`
);
console.log(`===================================`);
if (dolphinsAverageScore < 100 && koalasAverageScore < 100) {
    console.log(`No team won !`);
} else if (dolphinsAverageScore > 100 && koalasAverageScore < 100) {
    console.log(`Dolphins win the competition 🏆`);
} else if (dolphinsAverageScore < 100 && koalasAverageScore > 100) {
    console.log(`Koalas win the competition 🏆`);
} else if (dolphinsAverageScore > 100 && koalasAverageScore > 100) {
    if (dolphinsAverageScore > koalasAverageScore)
        console.log(`Dolphins win the competition 🏆`);
    if (dolphinsAverageScore < koalasAverageScore)
        console.log(`Koalas win the competition 🏆`);
    if (dolphinsAverageScore === koalasAverageScore)
        console.log(`Match is drawn!`);
}
