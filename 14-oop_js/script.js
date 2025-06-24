"use strict";

// using constructor functions to create objects.
// const Person = function (name, year) {
//     this.name = name;
//     this.year = year;

    // // never do this.
    // this.calcAge = function () {
    //     console.log(new Date().getFullYear() - this.year);
    // }
// };

// call the constructor with the "new" operator
// const sem = new Person("Sem", 1998);
// console.log(sem.calcAge());
// sem.calcAge()

// Using new
// 1.New {} is created.
// 2. function is called, this = {}
// 3. Nesly created object is then linked to a prototype.
// 4. function automatically returns the empty object.

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 2003);
// const susan = new Person("Susan", 1988);

// const jay = { name: "Jay", year: 2000 };
// console.log(jay);
// console.log(sem instanceof Person); // true
// console.log(jay instanceof Person); // false

// Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(new Date().getFullYear() - this.year);
// };

// console.log(sem);
// sem.calcAge();
// jack.calcAge();
// matilda.calcAge();
// susan.calcAge();

// console.log(jay.calcAge());
// console.log(sem.__proto__);
// console.log(sem.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(sem.__proto__.isPrototypeOf(Person));

// set properties
// Person.prototype.species = "Homo Sapiens";
// console.log(sem, jack, matilda);

// console.log(sem.species, matilda.species);
// console.log(sem.hasOwnProperty("name")); // true
// console.log(sem.hasOwnProperty("species")); // false
// console.log(Person.hasOwnProperty("species")); // false
// console.log(Person.prototype.hasOwnProperty("species")); // true

// Prototype inheritance & prototype chain.
// console.log(sem.__proto__);
// Object.prototype (top of prototype chain)
// console.log(sem.__proto__.__proto__);
// console.log(sem.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// Prototypes of Arrays
// const arr = [4, 6, 8, 2, 9, 3, 4, 3, 0, 2, 2, 3, 4, 5]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector("h1");


// ES6 Classes
// class expressions
// const Person = class { }

// class declarations
class Person {
    constructor(name, year) {
        this.fullName = name;
        this.birthYear = year;
    }

    // Class methods are added to the .prototype property.
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    // Set a property that already exists.
    set fullName(name) {
        if (name.includes(" ")) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }
}

const sem = new Person("Sem Mathe", 1998);
sem.calcAge();
sem.greet();
console.log(sem.age);

// console.log(sem.__proto__ === Person.prototype);
// Person.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };

// 1. Classes are NOT hoisted.
// 2. CLasses are first class citizens. - we can pass them in functions &
// return them from functions.
// 3. Classes are executed in Strict mode.

const walter = new Person("Walter White", 1965);

// Getters & setters
// getters & setters in regular objects.
const account = {
    owner: "Sem",
    movements: [200, 400, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);
account.latest = 250;
console.log(account.movements);

