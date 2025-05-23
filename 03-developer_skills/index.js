"use strict";

/**
 * Debugging Process
 * 1. Identify the bug
 * 2. Find the bug
 * 3. Fix the bug
 */

const measureKelvin = () => {
    const measurement = {
        type: "temp",
        unit: "celcius",
        value: Number(prompt("Degrees Celcius(°C): ")),
    };

    return measurement.value + 273;
}

// a. Identify the bug
console.log(`Temperature: ${measureKelvin()}K`);