"use strict";

// BANKIST APP
// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

// containers
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// buttons
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

// imputs
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
    containerMovements.innerHTML = "";
    movements.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}€</div>
            </div>  
        `;
        // insert adjacent html
        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

displayMovements(account1.movements);

const createUsernames = function (accs = []) {
    accs.forEach(function (acc = {}) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};

createUsernames(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

// LECTURES
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let arr = ["a", "b", "c", "d", "e"];

// slice() method.
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // creates a shallow copy.

// splice() method - mutates the original array.
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(1, 1));
// console.log(arr);

// reverse() method - mutates the original array.
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2.slice().reverse());
// console.log(arr2);

// concat() method - concatenates 2 arrays.
// const letters = arr.concat(arr2);
// console.log(letters);

// join() method - returns a string
// console.log(letters.join(" - "));

// at() method - retrieves an element at a specified index.
// also works on strings.
// const arr = [23, 11, 64];
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// forEach() method - requires a callback function as an argument.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1} ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1} ${Math.abs(movement)}`);
//     }
// }
// the 1st param is the current element,
// the 2nd param is the element index,
// the 3rd is the array.
// continue & break don't work in the forEach method.
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`${i + 1}. You deposited ${mov}`);
//     } else {
//         console.log(`${i + 1}. You withdrew ${Math.abs(mov)}`);
//     }
// });

// forEach is also available on maps & sets.
// const currencies = new Map([
//     ["USD", "United States dollar"],
//     ["EUR", "Euro"],
//     ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (val, key, map) {
//     console.log(`${key}: ${val}`);
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (val, _, set) {
//     console.log(`${val}: ${val}`);
// });

// Map, filter & reduce
// 1. map() method - returns a new array
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usdMov = movements.map((mov) => mov * eurToUsd);
// console.log(usdMov);

const movDesc = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: ${
            mov > 0 ? `You deposited ${mov}` : `You withdrew ${Math.abs(mov)}`
        }`
);
// console.log(movDesc);

// the filter method - returns a boolean value.
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// the reduce method - takes in a callback function and returns a single value.
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}====${cur}`);
    return acc + cur;
}, 0);
console.log(balance);

console.log("Total deposits: ");
console.log(deposits.reduce((acc, mov) => acc + mov, 0));
