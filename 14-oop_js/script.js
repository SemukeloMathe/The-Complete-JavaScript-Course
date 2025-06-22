"use strict";

// using constructor functions to create objects.
const Person = function (name, year) {
    this.name = name;
    this.year = year;

    this.calcAge = function () {
        console.log(new Date().getFullYear() - this.year);
    }
}

// call the constructor with the "new" operator
const sem = new Person("Sem", 1998);
// console.log(sem.calcAge());
sem.calcAge()

// Using new
// 1.New {} is created.
// 2. function is called, this = {}
// 3. Nesly created object is then linked to a prototype.
// 4. function automatically returns the empty object.

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 2003);
const susan = new Person("Susan", 1988);

const jay = { name: "Jay", year: 2000 }
// console.log(jay);
// console.log(sem instanceof Person);
// console.log(jay instanceof Person)

