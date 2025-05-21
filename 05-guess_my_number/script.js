"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highscore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", e => {
    const guess = Number(document.querySelector(".guess").value);
    // when there's no input
    if (!guess) {
        displayMessage("⛔ No number! ⛔");
        // when the player wins 
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct number 🎉");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        highscore = score > highscore ? score : highscore;
        document.querySelector(".highscore").textContent = highscore;
    } else if (guess !== secretNumber) {
        // when the guess is too high or too low
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 Game Over! You lost the game 💥");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", (e) => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    displayMessage("Start guessing...");
});