"use strict";

/**
 * Mark & John are trying to compare their BMI(Body Mass Index), which is
 * calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height) (mass in kg & height in m)
 * Your tasks:
 * 1. Store Mark's and John's mass and height in variables.
 * 2. Calculate both their BMIs using the formula (you can even implement both
 * versions)
 * 3. Create a boolean variable "markHigherBMI" containing information about
 * whether Mark has a higher BMI than John.
 * Test Data:
 * Data 1: Mark weighs 78kg & is 1.69m tall. John weighs 92kg & is 1.95m tall
 * Data 2: Mark weighs 95kg & is 1.88m tall. John weighs 85kg & is 1.76m tall
 */

// Test Data 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log("mark has a higher bmi than john: " + markHigherBMI);

// Test Data 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log("mark has a higher bmi than john: " + markHigherBMI);
