/**
 * Let's go back to Mark and John comparing their BMIs! This time, let's use
 * objects to implement the calculations!
 * Remember: BMI = mass / height ** 2 or mass / (height * height)
 * (mass in kg and height in meter)
 * 1. For each of them, create an object with properties for their full name,
 * mass, and height (Mark Miller and John Smith)
 * 2. Create a 'calcBMI' method on each object to calculate the BMI
 * (the same method on both objects). Store the BMI value to a property, and
 * also return it from the method.
 * 3. Log to the console who has the higher BMI, together with the full name
 * and the respective BMI. Example: "John Smith's BMI (28.3) is higher than
 * Mark Miller's (23.9)!"
 *
 * TEST DATA: Mark weighs 78 kg and is 1.69 m tall.
 *          : John weights 92 kg and is 1.95 m tall.
 */

const mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.myBmi = this.mass / this.height ** 2;
        return this.myBmi;
    },
};
const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.myBmi = this.mass / this.height ** 2;
        return this.myBmi;
    },
};

const mark_bmi = mark.calcBMI();
const jonh_bmi = john.calcBMI();

console.log(
    `${
        mark_bmi > jonh_bmi
            ? `${mark.fullname}'s BMI (${mark_bmi.toFixed(1)}) is higher than ${
                  john.fullname
              }'s (${jonh_bmi.toFixed(1)})`
            : `${john.fullname}'s BMI (${john_bmi.toFixed(1)}) is higher than ${
                  mark.fullname
              }'s (${mark_bmi.toFixed(1)})`
    }`
);
