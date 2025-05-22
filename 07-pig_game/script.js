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
// select players
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// game mechanics
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
dicEl.classList.add("hidden");

const switchPlayer = () => {
    // 1. reset currentScore to 0
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // 2. change the active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

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
        // dynamically getting the active player
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore; // note: change later
    } else {
        // if true, switch to next player
        switchPlayer();
    }
});

// Hold functionality
btnHold.addEventListener("click", () => {
    // 1. Add current score to active player score.
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. check score >= 100
    // 3. if score >=, game over. active player wins
    // 4. else switch player
    switchPlayer();
});