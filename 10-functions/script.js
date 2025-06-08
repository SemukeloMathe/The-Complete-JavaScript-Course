"use strict";
/** 
const bookings = new Array();

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 1000);
createBooking("LH123", undefined, 2);
*/

// const flight = "LH234";
// const sem = {
//     name: "Semukelo Mathe",
//     passport: 234542576,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = "LH999";
//     passenger.name = "Mr. " + passenger.name;

//     if (passenger.passport === 234542576) {
//         console.log("Check In");
//     } else {
//         console.log("Wrong Passport.");
//     }
// };

// console.log(flight);
// console.log(sem);

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1_000_000_000);
// };

// newPassport(sem);
// checkIn(flight, sem);
// console.log(sem);

// first class functions vs high order functions.
// const oneWord = function (str = "") {
//     return str.replace(/ g/, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(" ");
//     return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//     const result = fn(str);
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);

//     return result;
// };

// const res = transformer("JavaScript is the best!", upperFirstWord);
// console.log(res);
// console.log();
// const res2 = transformer("JavaScript is the best!", oneWord);
// console.log(res2);

// ["Jonas", "Martha", "Adam"].forEach(() => {
//     console.log("hello");
// });

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet("Hey");
// greeterHey("Sem");
// greeterHey("Lato");
// greeterHey("Sucre");

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Hello")("Legend");

// Call & Apply method.
// const lufthansa = {
//     airline: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book: function (flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
//     },
// };

// lufthansa.book(239, "Semukelo Mathe");
// lufthansa.book(645, "Legend Supi");
// console.log(lufthansa);

// const eurowings = {
//     airline: "Eurowings",
//     iataCode: "EW",
//     bookings: [],
// };

// const book = lufthansa.book;

// book(23, "Sarah Williams");
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//     airline: "Swiss Air Lines",
//     iataCode: "LX",
//     bookings: [],
// };

// book.call(swiss, 120, "Legend Mathe");
// book.call(swiss, 452, "Mary Cooper");
// book.call(swiss, 672, "Mary Mathe");
// console.log(swiss);

// Apply method - takes in an array of args.
// const flightData = [564, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData); // with modern javascript

// the bind method - returns a new function where the this keyword is bound.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(333, "Steven Willians");
// console.log(eurowings);
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Mathe Semukelo");
// bookEW23("Jana Junic");
// console.log(eurowings);

// With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);

//     this.planes++;

//     console.log(this.planes);
// };

// document
//     .querySelector(".buy")
//     .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// partial application - preset parameters.
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTax = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     };
// };

// const addTax2 = (rate) => (value) => value + value * rate;

// const addVat = addTax(0.23);
// console.log(addVat(100));
// console.log(addTax(0.1)(200));

// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
}

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

// example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers.`);
        console.log(`There are 3 groups each with ${perGroup} passengers.`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 120;
boardPassengers(180, 3);
// 