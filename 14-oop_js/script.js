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
// class Person {
//     constructor(name, year) {
//         this.fullName = name;
//         this.birthYear = year;
//     }

//     // Class methods are added to the .prototype property.
//     calcAge() {
//         console.log(new Date().getFullYear() - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return new Date().getFullYear() - this.birthYear;
//     }

//     // Set a property that already exists.
//     set fullName(name) {
//         if (name.includes(" ")) {
//             this._fullName = name;
//         } else {
//             alert(`${name} is not a full name`);
//         }
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method
//     static hey() {
//         console.log(`Hey there 👋🏽`);
//     }
// }

// const sem = new Person("Sem Mathe", 1998);
// sem.hey();
// Person.hey()
// sem.calcAge();
// sem.greet();
// console.log(sem.age);

// console.log(sem.__proto__ === Person.prototype);
// Person.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };

// 1. Classes are NOT hoisted.
// 2. CLasses are first class citizens. - we can pass them in functions &
// return them from functions.
// 3. Classes are executed in Strict mode.

// const walter = new Person("Walter White", 1965);

// Getters & setters
// getters & setters in regular objects.
// const account = {
//     owner: "Sem",
//     movements: [200, 400, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// };

// console.log(account.latest);
// account.latest = 250;
// console.log(account.movements);

// static methods
// to add a static method
// Person.hey = function () {
//     console.log(`Hey there 👋🏽`)
//     console.log(this);
// }

// Person.hey();
// sem.hey();
// static methods are not available to instances of a class.

// Object create
// const Person = {
//     calcAge() {
//         console.log(new Date().getFullYear() - this.year);
//     },

//     init(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// {
//     calcAge: function () {
//         console.log(new Date().getFullYear() - this.year);
//     }
// }
// const sem = Object.create(Person);

// sem.name = "Sem";
// sem.year = 1998;
// sem.init("Sem", 1998)

// console.log(sem.__proto__ === Person);
// sem.calcAge()
// console.log(sem);
// console.log(sem.__proto__);

// Inheritance
// const Person = function (name, year) {
//     this.name = name;
//     this.year = year;

// };

// Person.prototype.calcAge = function () {
//     console.log(new Date().getFullYear() - this.year);
// };

// const Student = function (name, year, course) {
//     Person.call(this, name, year);
//     this.course = course;
// }

// Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`Hi, my name is ${this.name} & I am studying ${this.course}`);
// }

// const mike = new Student("Mike", 2008, "Computer Science");
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Inheritance using es6 classes
// class Person {
//     constructor(name, year) {
//         this.fullName = name;
//         this.birthYear = year;
//     }

//     // Class methods are added to the .prototype property.
//     calcAge() {
//         console.log(new Date().getFullYear() - this.birthYear);
//     }

//     greet() {
//         console.log(`Hey ${this.fullName}`);
//     }

//     get age() {
//         return new Date().getFullYear() - this.birthYear;
//     }

//     // Set a property that already exists.
//     set fullName(name) {
//         if (name.includes(" ")) {
//             this._fullName = name;
//         } else {
//             alert(`${name} is not a full name`);
//         }
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     // Static method
//     static hey() {
//         console.log(`Hey there 👋🏽`);
//     }
// }

// class Student extends Person {
//     constructor(name, year, course) {
//         // Always needs to happen first!
//         super(name, year);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(
//             `I'm ${
//                 new Date().getFullYear() - this.birthYear
//             } year's old, but as a student i feel more like i'm ${
//                 new Date().getFullYear() - this.birthYear + 10
//             } years old.`
//         );
//     }
// }

// const sem = new Student("Sem Mathe", 1998, "Computer Science");
// sem.introduce();
// sem.calcAge();
// sem.greet();

// inheritance using Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(new Date().getFullYear() - this.year);
//     },

//     init(name, year) {
//         this.name = name;
//         this.year = year;
//     },
// };

// const sem = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (name, year, course) {
//     PersonProto.init.call(this, name, year);
//     this.course = course;
// };

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.name} and I study ${this.course}`);
// };

// const pali = Object.create(StudentProto);
// pali.init("Pali ", 2005, "Computer Science");
// pali.introduce();
// pali.calcAge();

// class examples
class Account {
    // 1) Public fields (only available on the instances)
    locale = navigator.language;

    // 2) Private fields
    #movements = new Array();
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thank you for opening an account, ${owner}`);
    }

    // 3) public methods.
    // public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if (this.#approveLoan()) {
            this.deposit(val);
            console.log("Loan approved");
            return this;
        }
    }

    // 4) Private methods
    #approveLoan() {
        return true;
    }
}

const acc1 = new Account("Sem", "ZAR", 1111);
// acc1.movements.push(250);
// acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1);
// acc1._movements.push(2500);
// acc1.requestLoan(1000);

// console.log(acc1.approveLoan(2000));
// console.log(acc1.pin);
// console.log(acc1.getMovements());

// private class fields & methods.
// 1. public fields
// 2. private fields
// 3. public methods
// 4. private methods
// 5. static methods (only available on the class itself.)

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1);

// Chaining class methods.
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);