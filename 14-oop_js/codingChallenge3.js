/**
 * 1. Use a constructor function to implement an Electric Car (called EV) as a
 * CHILD "class" of Car. Besides make and currentspeed, the EV also has the
 * current battery charge in % ("charge" property).
 * 2. Implement a "chargeBattery" method which takes an argument "chargeTo" and
 * sets the battery charge to "chargeTo".
 * 3. Implement an "accelerate" method that will increase the car's speed by 20
 * and decrease the charge by 1%. Then log a message like this: "Tesla going at
 * 140 km/h, with a charge of 22%".
 * 4. Create an electric car object & experiment with calling "accelerator",
 * "brake", & "chargeBattery" (charge to 90%). Notice what happens when you
 * "accelerate"!
 *
 * CAR DATA 1: "Tesla" going at 120 km/h, with a charge of 23%
 */

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`"${this.make}" going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`"${this.make}" going at ${this.speed} km/h`);
};

// 1.
const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// link the EV class to the Car class
EV.prototype = Object.create(Car.prototype);

// 2.
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

// 3.
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
};

EV.prototype.constructor = EV;

// 4.
const tesla = new EV("Tesla", 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log();

console.log(tesla);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
console.log();

tesla.brake();
console.log(tesla);
console.log();

console.log(EV.prototype.constructor);