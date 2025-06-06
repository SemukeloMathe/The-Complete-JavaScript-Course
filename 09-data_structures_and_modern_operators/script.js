"use strict";
/** 
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);
*/
/** 
// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
        starterIndex = 0,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        // console.log(starterIndex, mainIndex, time, address);
        console.log(
            `"Order received!" ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here's your delicious pasta with ${ing1}, ${ing2} & ${ing3}`
        );
    },
    orderPizza: function (mainIng, ...otherIng) {
        console.log(`${mainIng}, ${otherIng}`);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
*/
/** 
// Array destructuring.
const arr = [2, 3, 4];
const [a, b, c] = arr;
// console.log(a, b, c)

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = new Array(secondary, main);
console.log(main, secondary);

const [starter, mainMeal] = restaurant.order(2, 0);
console.log(starter, mainMeal);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values in destructuring.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Destructuring objects
/**
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
// to make variable names different from property names.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// you can set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// mutating variables whilst destructuring.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// the trick is to wrap the destructuring in parenthesis.
({ a, b } = obj);
// nested objects.
const {
  fri: { open: o = 4, close: c = 4 },
} = restaurant.openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del Sole 21",
  starterIndex: 2,
});
*/

// spread operator
/**
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
// creates a shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// koin 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
// the spread operator doesn't work on objects
// console.log(...restaurant);
const ingredients = ["Mushroom", "Asparagus", "Cheese"];
restaurant.orderPasta(...ingredients);

// As of es2018, spread works on objects.
const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 1998 };
console.log(newRestaurant);

// create object copy.
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";

console.log(restaurant, restaurantCopy);
*/
/** 
// Rest pattern & params.
const arr = [2, 3, ...[3, 4]];
const [a, b, ...others] = arr;
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// rest param on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};
console.log(add(2, 5));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza("Mushroom", "Olives", "Onion", "Spinach");
*/

/**
// Short circuiting / Short-circuit evaluation
console.log("-------OR--------");
console.log(3 || "sem");
console.log("" || "sem");
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("-------AND-------")
console.log(0 && "sem");
console.log(7 && "Jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "spinach");
 */

/**
// Nullish coalescing operator
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10;
console.log(guests1);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
console.log("" ?? null);
 */

/** 
// Logical Assignment operators
const rest1 = {
  name: "Capri",
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Sem Mathe",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;
// console.log(rest1);
// console.log(rest2);

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);


// assigns a value to a variable if it is currently truthy
// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";
rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";
console.log(rest1);
console.log(rest2);
*/

/** 
// The for of loop.
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// to get the index of an array using the entries method.
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()])
*/

// Enhanced Object Literals.
/**
// es6 introduced 3 new ways that make it easier to write object literals
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
}

// no need to write the property name
const resta = {
    openingHours,
}
// also no need to write the property name for object methods.
const resta2 = {
    order(starterIndex, mainIndex) {
        return starterIndex, mainIndex;
    } // perfectly valid syntax.
}
// we can now compute property names instead of manually writing them.
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const rest3 = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

console.log(rest3);
*/

// Optional chaining
/**
// if a certain property doesn't exist, undefined is returned immediately.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day} we open at ${open}`);
}

// on methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

// on arrays, used to check if array is empty
const users = [];
console.log(users[0]?.name ?? "user array empty");
*/

/** 
// Looping objects: object keys, values, entries.
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
// propert names
// for (const day of Object.keys(openingHours)) console.log(day);
// property values
const values = Object.values(openingHours);
// console.log(values);
// entries
const entry = Object.entries(openingHours);
// console.log(entry);
for (const [key, {open, close}] of entry) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
};
*/

/**
// Sets
const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
// console.log(orderSet);
// console.log(new Set());
// get the size of a set.
// console.log(orderSet.size);
// check if a certain element is in a set.
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("pizza"));
// add new elements to a set.
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
// console.log(orderSet);
// delete elements in a set.
orderSet.delete("Risotto");
// console.log(orderSet);
// to retrieve values in a set.
// there's no way of getting values out of a set.
// deleting all the elements in set.
// orderSet.clear();
// console.log(orderSet);
const staff = ["Waiter", "Chef", "Manager", "Waiter", "Chef", "Waiter"];
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);
*/
/** 
// Maps
const restMap = new Map();
// to add elements to a map, use the set method.
// set takes in a key and value.
restMap.set("name", "Classico Italiano");
restMap.set(1, "Firenze, Italy");
restMap.set(2, "Lisbo Portugal");
// because the set method returns the set, this allows for chaining methods.
restMap
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open! :D")
    .set(false, "We are closed :(");
// console.log(restMap);
// to read data from a map, use the get method.
// console.log(restMap.get("name"));
// console.log(restMap.get(true));
const time = 21;
// console.log(
//     restMap.get(time > restMap.get("open") && time < restMap.get("close"))
// );
// check if a map contains a certain key.
// console.log(restMap.has("categories"));
// delete elements from the map. use the key
// restMap.delete(2);
// console.log(restMap);
// maps have the size property aswell
// console.log(restMap.size);
// we can also clear all the elements from the map.
// console.log(restMap.clear());
// we can also use objects as map keys.
// restMap.set([1, 2], "Test");
// console.log(restMap.get([1, 2])); // results in undefined.
// console.log(restMap);
// const arr = [1, 2];
// restMap.set(arr, "Test");
// console.log(restMap.get(arr));
*/
/** 
// creating a new map, use a nested array.
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    [4, "Python"],
    [5, "C++"],
    ["correct", 3],
    [true, "correct"],
    [false, "try again"]
]);
// console.log(question);

// convert object to map.
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap)
// iterating through a map.
// quiz app
console.log(question.get("question"));
for (const [key,value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt("Your answer: "))
// console.log(answer);
const answer = 3;

// console.log(answer === question.get("correct") ? question.get(true) : question.get(false));
console.log(question.get(answer === question.get("correct")));

// converting a map to an array.
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.values()]);
console.log([...question.keys()]);
*/

/**
const airplane = "TAP Air Portugal";
const plane = "A320";

// Strings
// get char at certain index position.
console.log()
// read length of strings

const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const name of names) {
        // namesUpper.push(name[0].toUpperCase() + name.slice(1));
        namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
}

capitalizeName("jessica ann smith davis");
capitalizeName("semukelo mathe");

// function that masks a credit card number.
const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);

    return last.padStart(str.length, "*");
}

console.log(maskCreditCard(6232389289830));
console.log(maskCreditCard(371973083393));

// repeat method, repeats the same string multiple times
const message = "Bad Weather...All departures delayed...";

console.log(message.repeat(5));
 */

const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
        "_",
        " "
    )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
        ":",
        "h"
    )})`.padStart(45);
    console.log(output);
}