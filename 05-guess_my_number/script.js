"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20

document.querySelector(".number").textContent = secretNumber;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", e => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {

        document.querySelector(".message").textContent = "⛔ No number! ⛔";

    } else if (guess === secretNumber) {

        document.querySelector(".message").textContent = "🎉 Correct number 🎉";

    } else if (guess > secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 Game Over! You lost the game 💥";
            document.querySelector(".score").textContent = 0;
        }

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
