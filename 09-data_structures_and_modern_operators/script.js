'use strict';
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
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2} & ${ing3}`);
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