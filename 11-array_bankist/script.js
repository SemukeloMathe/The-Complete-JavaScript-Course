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
    interestRate: 1.0,
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

// function that displays transactions
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
// displayMovements(account1.movements);

// function that creates usernames to the object.
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

// function that calculates & displays the account summary
const calcDisplaySummary = function (account) {
    const income = account.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;

    const out = account.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = account.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * account.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// calcDisplaySummary(account1.movements);

// function that calculates & displays the balance.
const calcDisplayBalance = function (account) {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${account.balance} €`;
};

const updateUI = function (account) {
    // display movements
    displayMovements(account.movements);
    // display balance
    calcDisplayBalance(account);
    // display summary
    calcDisplaySummary(account);
};

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value);

    if (!loanAmount) return;

    if (
        loanAmount > 0 &&
        currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)
    ) {
        console.log("You qualify for a loan");
        currentAccount.movements.push(loanAmount);
        // update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});

// Event handlers
let currentAccount;
btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI & Welcom welcome message.
        labelWelcome.textContent = `Welcome back ${currentAccount.owner
            .split(" ")
            .at(0)}`;
        containerApp.style.opacity = 100;
        // clear the inputs field
        inputLoginUsername.value = "";
        inputLoginPin.value = "";
        inputLoginPin.blur();
        // Display movements
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault(); // prevents page reloads.

    const amount = Number(inputTransferAmount.value);
    const transferTo = inputTransferTo.value;

    const receiverAcc = accounts.find((acc) => acc.username === transferTo);
    inputTransferAmount.value = "";
    inputTransferTo.value = "";
    inputTransferAmount.blur();

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the update
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        // console.log("Transfer valid.");

        // update the ui.
        updateUI(currentAccount);
    } else {
        console.log("Invalid Transfer!");
    }
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault(); // prevents page reloading
    // console.log("Delete");
    const username = inputCloseUsername.value;
    const pin = Number(inputClosePin.value);

    if (username !== currentAccount.username || currentAccount.pin !== pin) {
        console.log("403 - Forbidden");
        // update ui
        inputCloseUsername.value = "";
        inputClosePin.value = "";
        inputClosePin.blur();
        return;
    }

    const deleteAcc = accounts.find((acc) => acc.username === username);
    const deleteAccIndex = accounts.findIndex(
        (acc) => acc.username === username
    );
    // update ui
    inputCloseUsername.value = "";
    inputClosePin.value = "";
    inputClosePin.blur();

    if (deleteAccIndex >= 0) {
        console.log(`Account to be deleted: ${JSON.stringify(deleteAcc)}`);
        accounts.splice(deleteAccIndex, 1);
        console.log(accounts);
    }
    // hide ui
    containerApp.style.opacity = 0;
});

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
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const usdMov = movements.map((mov) => mov * eurToUsd);
// console.log(usdMov);

// const movDesc = movements.map(
//     (mov, i) =>
//         `Movement ${i + 1}: ${
//             mov > 0 ? `You deposited ${mov}` : `You withdrew ${Math.abs(mov)}`
//         }`
// );
// console.log(movDesc);

// the filter method - returns a boolean value.
// const deposits = movements.filter((mov) => mov > 0);
// console.log(deposits);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// the reduce method - takes in a callback function and returns a single value.
// const balance = movements.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i}: ${acc}====${cur}`);
//     return acc + cur;
// }, 0);
// console.log(balance);

// console.log("Total deposits: ");
// console.log(deposits.reduce((acc, mov) => acc + mov, 0));

// maximum value
// const maxValue = movements.reduce(
//     (acc, mov) => (acc > mov ? acc : mov),
//     movements.at(0)
// );
// console.log(maxValue);

// minimum value
// const minValue = movements.reduce(
//     (acc, mov) => acc < mov ? acc : mov, movements.at(0)
// );
// console.log(minValue);

// chaining methods.
// const totalUsdDeposit = Number(
//     movements
//         .filter((mov) => mov > 0)
//         .map((mov) => mov * eurToUsd)
//         .reduce((acc, mov) => acc + mov, 0)
// );

// console.log(totalUsdDeposit);

// the find() method - retrieve one element in an array based on a condition.
// doesn'treturn a new array, only the first element that meets the condition.

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// let account;
// for (const acc of accounts) {
//     if (acc.owner === "Jessica Davis") {
//         // console.log(acc);
//         account = { ...acc };
//     }
// }
// console.log(account);
// console.log(movements);
// console.log(movements.includes(-130));

// the some() method - takes a callback function that checks a specific condition for any value that meets that condition.
// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

// the every() method - takes a callback function and returns true if all elements pass the requirement for a condition.
// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// the flat() method - it removes nested arrays only 1 level deep.
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// depending on the depth, you can pass an arg to specify the level of depth.
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements.flat().reduce((acc, mov) => acc + mov, 0));

// const overallBalance = accounts
//     .map((acc) => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);

// flatMap - combines the flat() & map() method. Introduced for perfomance
// const overallBalance2 = accounts
//     .flatMap((acc) => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);

// Sorting
// sort() - mutates the original array
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// ascending
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
// });
movements.sort((a, b) => a-b)
console.log(movements)

// descending.
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);