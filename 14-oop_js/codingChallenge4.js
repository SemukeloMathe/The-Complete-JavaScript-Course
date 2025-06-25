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
        return this;
    }

    getCharge() {
        return this.#charge;
    }
}

const rivian = new EV("Rivian", 120, 10);

while (rivian.getCharge() !== 0) {
    rivian.accelerate();

    while (rivian.getCharge() < 1) {
        if (rivian.speed > 20) {
            rivian.hardBrake();
        } else if (rivian.speed <= 20 && rivian.speed > 0) {
            rivian.brake();
        } else {
            break;
        }
    }
}

rivian.chargeBattery(60);
rivian.accelerate().accelerate();

console.log(rivian);
