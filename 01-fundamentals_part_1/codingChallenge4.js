"use strict";

/**
 * Steven wants to build a very simple tip calculator for whenever he goes
 * eating in a resturant. In his country, it's usual to tip 15% if the bill
 * value is between 50 and 300. If the value is different, the tip is 20%.
 * 1. Your task is to caluclate the tip, depending on the bill value. Create a
 * variable called 'tip' for this. It's not allowed to use an if/else statement
 * 😅 (If it's easier for you, you can start with an if/else statement, and then
 * try to convert it to a ternary operator!)
 * 2. Print a string to the console containing the bill value, the tip and the
 * final value (bill + tip). Example: "The bill was 275, the tip was 41.25 and
 * the total value 316.25"
 *
 * HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 * HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 *
 * Test Data: Test for bill values 275, 40 and 430.
 */

// Test Data 1
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was R ${bill.toFixed(2)}, the tips was R ${tip.toFixed(
        2
    )} and the total value R ${(bill + tip).toFixed(2)}`
);

// Test Data 2
bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was R ${bill.toFixed(2)}, the tips was R ${tip.toFixed(
        2
    )} and the total value R ${(bill + tip).toFixed(2)}`
);

// Test Data 3
bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was R ${bill.toFixed(2)}, the tips was R ${tip.toFixed(
        2
    )} and the total value R ${(bill + tip).toFixed(2)}`
);


