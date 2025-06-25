/**
 * Recreate challenge 3 using ES6 classes: create "EV" child class of "Car"
 * class.
 * 2. Make the "charge" property private.
 * 3. Implement the ability to chain the "accelerate" and "chargeBattery"
 * methods of this class, & update the "brake" method in the Car class.
 *
 * CAR DATA 1: "Rivian" going at 120km/h, with a charge of 23%
 */

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h.`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h.`);
        return this;
    }
}

class EV extends Car {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        console.log(`${this.make} is charging to ${chargeTo}`);

        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${
                this.#charge
            }%`
        );
        return this;
    }

    hardBrake() {
        this.speed -= 50;
        console.log(`${this.make} going at ${this.speed} km/h.`);
        return this;
    }

    getCharge() {
        return this.#charge;
    }
}

const rivian = new EV("Rivian", 120, 10);

rivian.accelerate().brake().brake().brake();
rivian.chargeBattery(60);

console.log(rivian);
