"use strict";

/**
 * Use the BMI example from challenge #1 and the code you already wrote and
 * improve it.
 * 1. Print a nice output to the console saying who has the higher BMI. The
 * message can be either "Mark's BMI is higher than John's!"
 * 2. Use a template string to include the BMI values in the outputs. Example:
 * "Mark's BMI (28.3) is higher than John's (23.9)"
 * 
 * HINT: use an if/else statement
 */

// Test Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`);
    console.log(
        `Mark's BMI (${markBMI.toFixed(
            2
        )}) is higher than John's (${johnBMI.toFixed(2)})`
    );
} else {
    console.log(`John's BMI is higher than Mark's`);
    console.log(
        `John's BMI (${johnBMI.toFixed(
            2
        )}) is higher than Mark's (${markBMI.toFixed(2)})`
    );
}

// Test Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's`);
    console.log(
        `Mark's BMI (${markBMI.toFixed(
            2
        )}) is higher than John's (${johnBMI.toFixed(2)})`
    );
} else {
    console.log(`John's BMI is higher than Mark's`);
    console.log(
        `John's BMI (${johnBMI.toFixed(
            2
        )}) is higher than Mark's (${markBMI.toFixed(2)})`
    );
}
