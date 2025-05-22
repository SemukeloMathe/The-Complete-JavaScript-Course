"use strict";

// grabbing elements
// selecting the scores
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// selecting the dice
const dicEl = document.querySelector(".dice");
// selecting the buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// game scores
let currentScore = 0; 

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice.
    dicEl.classList.remove("hidden");
    dicEl.src = `dice-${dice}.png`;
    // 3. Check for rolled dice === 1:
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore; // note: change later
    } else {
        // if true, switch to next player

    }
});