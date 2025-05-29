"use strict";

// array methods
// to add elements
const friends = new Array("Sem", "Legend", "Mathe");
const pushed = friends.push("Sucre");

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
console.log(friends.indexOf("Legend"));

console.log(friends.includes("Mathe"));