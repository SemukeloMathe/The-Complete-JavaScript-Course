const budget = Object.freeze([
    { value: 250, description: "Sold old TV 📺", user: "jonas" },
    { value: -45, description: "Groceries 🥑", user: "jonas" },
    { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
    { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
    { value: -1100, description: "New iPhone 📱", user: "jonas" },
    { value: -20, description: "Candy 🍭", user: "matilda" },
    { value: -125, description: "Toys 🚂", user: "matilda" },
    { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
});
const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limit, value, description, user = "jonas") {
    const cleanUser = user.toLowerCase();
    return value <= getLimit(limit, cleanUser)
        ? [...state, { value: -value, description, user: cleanUser }]
        : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
// console.log(newBudget1);
const newBudget2 = addExpense(
    newBudget1,
    spendingLimits,
    100,
    "Going to movies 🍿",
    "Matilda"
);
// console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff");

const checkExpenses = function (state, limits) {
    return state.map((entry) => {
        return entry.value < -getLimit(limits, entry.user)
            ? { ...entry, flag: "limit" }
            : entry;
    });
};

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);
console.log(finalBudget);

const logBigExpenses = function (bigLimit) {
    let output = "";
    for (const entry of budget)
        output +=
            entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ""; // Emojis are 2 chars

    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

// console.log(budget);
// console.log(budget);
logBigExpenses(500);
