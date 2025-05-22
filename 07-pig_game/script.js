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

// game state variables
let scores, currentScore, activePlayer, playing;

const initGame = () => {
    // game state initialization
    scores = new Array(0, 0);
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    // ui elements starting conditions
    score0El.textContent = 0;
    score1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    // reset class names
    dicEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active")
    player1El.classList.remove("player--active");
};
// start game
initGame();

// resets the current score of the active player.
const resetCurrentScore = () => {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

const switchPlayer = () => {
    // 1. reset currentScore to 0
    resetCurrentScore();
    // 2. change the active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
    if (playing) {
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
        } else {
            // if true, switch to next player
            switchPlayer();
        }
    }
});

// Hold functionality
btnHold.addEventListener("click", () => {
    if (playing) {
        // 1. Add current score to active player score.
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. check score >= 100
        if (scores[activePlayer] >= 100) {
            // 3. if score >=, game over. active player wins
            playing = false;
            // set current score to 0;
            resetCurrentScore();
            // add player--winner class & remove--active player class
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            // remove dice
            dicEl.classList.add("hidden");
        } else {
            // 4. else switch player
            switchPlayer();
        }
    }
});

// New game functionality
btnNew.addEventListener("click", initGame);