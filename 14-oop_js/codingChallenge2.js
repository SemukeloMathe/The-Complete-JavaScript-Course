/**
 * 1. Re-create challenge 1, but this time using an ES6 class.
 * 2. Add a getter called "speedUS" which returns the current speed in m/h
 * (divide by 1.6).
 * 3. Add a setter called "speedUS" which sets the current speed in m/h (but
 * converts it to km/h before storing the value, by multiplying the input by
 * 1.6).
 * 4. Create a new car and experiment with accelerate and brake methods, and
 * with the getter and setter.
 *
 * CAR DATA 1: "Ford" going at 120 km/h
 */

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going ${this.speed} km/h`);
    }

    // 2.
    get speedUS() {
        console.log(
            `${this.make} going at ${this.speed / (1.6).toFixed(0)} m/h`
        );
    }

    // 3.
    set speedUS(speed) {
        console.log(`${this.make} going at ${speed} m/h`);
        this.speed = speed * 1.6;
    }
}

// 4.
const ford = new Car("Ford", 120);
console.log(ford);
ford.accelerate();
ford.brake();
ford.speedUS;
ford.speedUS = 90;
console.log(ford.speed);