"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highscore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;

document.querySelector(".check").addEventListener("click", e => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // when there's no input
    if (!guess) {

        document.querySelector(".message").textContent = "⛔ No number! ⛔";

        // when the player wins 
    } else if (guess === secretNumber) {

        document.querySelector(".message").textContent = "🎉 Correct number 🎉";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";


        highscore = score > highscore ? score : highscore;
        document.querySelector(".highscore").textContent = highscore;

        // when the guess is too high
    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 Game Over! You lost the game 💥";
            document.querySelector(".score").textContent = 0;
        }

        // when the guess is too low
    } else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 Game Over! You lost the game 💥";
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
    document.querySelector(".message").textContent = "Start guessing...";
});