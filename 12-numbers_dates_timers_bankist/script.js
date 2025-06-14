'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
        "2025-05-28T13:15:33.035Z",
        "2025-05-30T09:48:16.867Z",
        "2025-06-01T06:04:23.907Z",
        "2025-06-05T14:18:46.235Z",
        "2025-06-08T16:33:06.386Z",
        "2025-06-09T14:43:26.374Z",
        "2025-06-10T18:49:59.371Z",
        "2025-06-11T12:01:20.894Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
        "2025-05-28T13:15:33.035Z",
        "2025-05-30T09:48:16.867Z",
        "2025-06-01T06:04:23.907Z",
        "2025-06-05T14:18:46.235Z",
        "2025-06-08T16:33:06.386Z",
        "2025-06-09T14:43:26.374Z",
        "2025-06-10T18:49:59.371Z",
        "2025-06-11T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) => {
        return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
    };
    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
    }).format(value);
};

const displayMovements = function (account, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort
        ? account.movements.slice().sort((a, b) => a - b)
        : account.movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const date = new Date(account.movementsDates[i]);
        const displayDate = formatMovementDate(date, account.locale);
        const formattedMov = formatCur(mov, account.locale, account.currency);

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(
        Math.abs(out),
        acc.locale,
        acc.currency
    );

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCur(
        interest,
        acc.locale,
        acc.currency
    );
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        // In each call, print the remaining time to UI
        labelTimer.textContent = `${min}:${sec}`;
        // When 0 seconds, stop timer & logout user.
        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = "Log in to get started";
            containerApp.style.opacity = 0;
        }
        // decrease time by one second
        time--;
    };
    // Set time to 5 mins
    let time = 599;
    // Call the timer every second
    tick();
    const timer = setInterval(tick, 1000);

    return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Experimenting Api
// const now = new Date();
// const options = {
//     hour: "numeric",
//     minute: "numeric",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "short"
// };
// const locale = navigator.language;
// console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat("en-ZW", options).format(now);

// Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", function (e) {
    // Prevent page reload on form submit.
    e.preventDefault();

    currentAccount = accounts.find(
        (acc) => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === +inputLoginPin.value) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = 100;

        // create new date & time
        const now = new Date();
        const options = {
            hour: "numeric",
            minute: "numeric",
            day: "numeric",
            month: "numeric",
            year: "numeric",
            // weekday: "long",
        };
        labelDate.textContent = new Intl.DateTimeFormat(
            currentAccount.locale,
            options
        ).format(now);

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";

        if (timer) clearInterval(timer);
        timer = startLogoutTimer();

        inputLoginPin.blur();
        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(
        (acc) => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        // Add transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());
        // Update UI
        updateUI(currentAccount);
        // reset timer
        clearInterval(timer);
        timer = startLogoutTimer();
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Math.floor(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some((mov) => mov >= amount * 0.1)
    ) {
        setTimeout(function () {
            // Add movement
            currentAccount.movements.push(amount);
            // Add loan date
            currentAccount.movementsDates.push(new Date().toISOString());
            // Update UI
            updateUI(currentAccount);
            // reset timer
            clearInterval(timer);
            timer = startLogoutTimer();
        }, 2500);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    if (
        inputCloseUsername.value === currentAccount.username &&
        +inputClosePin.value === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            (acc) => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)
        // Delete account
        accounts.splice(index, 1);
        // Hide UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/**
// Conversion
console.log(Number("23"))
console.log(+"23"); // results in the integer 23

// parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseFloat("  2.5rem  "));
console.log(Number.parseFloat("  0.7rem  "));

// checks if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// check if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(20 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
 */

// Rounding numbers
// square root
// console.log(Math.sqrt(25));
// console.log(25 ** (1/2))
// console.log(8 ** (1 / 3))

// Max
// console.log(Math.max(5, 18, 23, 11, 2));
// Min
// console.log(Math.min(5, 18, 23, 11, 2));

// Math constants
// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Random function
// console.log(Math.trunc(Math.random() * 6) + 1)

// const randomInt = (min, max) =>
// Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// Rounding Integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// remainder operator
// const isEven = n => n % 2 === 0
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));
// labelBalance.addEventListener("click", function () {
//     [...document.querySelectorAll(".movements__row")].forEach(function (
//         row,
//         i
//     ) {
//         if (i % 2 === 0) row.style.backgroundColor = "grey";
//         // if (i % 3 === 0) row.style.backgroundColor = "blue";
//     });
// });

// Numeric separators
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.141_5;
// console.log(PI);

// console.log(Number("2_300_000"));

// BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// console.log(46567898865432345432234567890908976345576576787n);
// console.log(BigInt(46567898865432345432234567890908976345576576787n));
// console.log(11111n ** 12342n);

// Dates & Time
// create a date. theres 4 ways to create a date in js.
// 1.
// const now = new Date();
// console.log(now);
// // 2. parse the date from a date string
// console.log(new Date("Thu Jun 12 2025 22:51:57"));
// console.log(new Date("December 24, 2015"));
// console.log(new Date(account1.movementsDates[0]));
// // 3.
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 33));
// console.log(new Date(0));
// // 4.
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.toDateString());
// console.log(future.getTime())
// console.log(new Date(2142249780000));
// console.log(Date.now())
// future.setFullYear(2040);
// console.log(future);
// future.set

// dates calculation.
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//     Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

// Internationalizing Dates (Itnl8)

// const num = 3884764.23;
// const options = {
//     style: "currency",
//     currency: "EUR",
//     // useGrouping: false,
// };

// console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
// console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
// console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
// console.log(
//     navigator.language,
//     new Intl.NumberFormat(navigator.language, options).format(num)
// );

// time functions
// setTimeout()
// const ingredients = ["olives"];
// const pizzaTimer = setTimeout(
//     (ing1, ing2) => console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`),
//     3000,
//     ...ingredients
// );
// console.log("Waiting...");

// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// // setInterval
// const interval = setInterval(function () {
//     const now = new Date();
//     const hour = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();

//     console.log(`${hour}:${min}.${sec}`);
// }, 1000);

// setTimeout(() => clearInterval(interval), 10000);
