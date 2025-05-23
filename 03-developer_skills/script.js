"use strict";

/** PROBLEM: 
 * We work for a company building a smart home thermometer. Our most recent 
 * task is this:  
 * "Given an array of temperatures of one day, calculate the temperature
 * amplitude. Keep in mind that sometimes there might be a sensor error."
 * 1. Understanding the problem.
 * - what is temperature amplitude? Answer - difference between highest &
 * lowest temp.
 * - how to compute max and min temperatures?
 * - what is a sensor error? and what do?
 * 
 * 2. Breaking up the problem into sub-problems.
 * - How to ignore sensor errors?
 * - find max value in temp array
 * - find min value in temp array
 * - Subtract min from max (amplitude) and
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = (temps) => {
    let max = temps[0];
    let min = temps[0];

    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number")
            continue;

        if (curTemp > max)
            max = curTemp;
        if (curTemp < min)
            min = curTemp;
    };

    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(`Temperature amplitude: ${amplitude}`);

/**
 * PROBLEM 2:
 * The function should now receive two arrays of temperatures.
 * 1. Understanding the problem?
 * - Do we need to implement the same functionality twice? answer no, just
 * merge the two arrays.
 * 2. Breaking up into sub problem.
 * - merge 2 arrays.
 */

const calcTempAmplitudeNew = (temps1, temps2) => {
    const temps = temps1.concat(temps2);

    let min = temps[0];
    let max = temps[0];

    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number")
            continue;

        if (curTemp < min)
            min = curTemp;

        if (curTemp > max)
            max = curTemp;
    }

    return max - min;
};

const testArray1 = [3, 5, 1];
const testArray2 = [9, 0, 5];

const amplitudeNew = calcTempAmplitudeNew(testArray1, testArray2);
console.log(`Temperature amplitude: ${amplitudeNew}`);