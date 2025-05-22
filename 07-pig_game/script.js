"use strict";

// grabbing elements
// selecting the scores
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
// selecting the dice
const dicEl = document.querySelector(".dice");


score0El.textContent = 0;
score1El.textContent = 0;
dicEl.classList.add("hidden");