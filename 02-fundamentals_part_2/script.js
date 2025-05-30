"use strict";

// array methods
// to add elements
// const friends = new Array("Sem", "Legend", "Mathe");
// const pushed = friends.push("Sucre");

// console.log(pushed);
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// to remove elements, these don't take in any args
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift()
// console.log(shifted);
// console.log(friends);

// positions of elements
// console.log(friends.indexOf("Legend"));
// console.log(friends.includes("Mathe"));

// objects

const sem = {
    firstName: "Semukelo",
    lastName: "Mathe",
    birthYear: 1998,
    job: "student",
    friends: new Array(3).fill(0),
    hasDriversLicence: false,
    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year's old ${this.job
            }, and he ${this.hasDriversLicence ? "has a driver's licence." :
            "he does not have a driver's licence."
        }`
    }
};

console.log(sem.calcAge());
console.log(sem.getSummary())
console.log(sem.friends)
