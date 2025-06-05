/**
 * Let's continue with our football betting app!
 *
 * 1. Loop over the "game.scored" array and print each player name to the
 * console, along with the goal number (Example: "Goal 1: Lewandowski")
 *
 * 2. Use a loop to calculate the average odd and log it to the console
 * (We already studied how to calculate averages, you can go check if you don't
 * remember)
 *
 * 3. Print the 3 odds to the console, but in a nice formatted way, exactly
 * like this:
 *      Odd of victory Bayern Munich: 1.33
 *      Odd of draw: 3.25
 *      Odd of victory Borrussia Dortmund: 6.
 *
 * Get the team names directly from the game object, don't hardcode them
 * (except for "draw"). HINT: Note how the odds and the game objects have the
 * same property names 😉
 *
 * BONUS: Create an object called 'scorers' which contains the names of the
 * players who scored as properties, and the number of goals as the value.
 * In this game, it will look like this:
 *      { Gnarby: 1, Hummels: 1, Lewandowski: 2 }
 */

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnabry",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
for (const [i, scorer] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${scorer}`);
}

// 2.
const gameOdds = Object.entries(game.odds);
let sum = 0;
for (const [, value] of gameOdds) {
    sum += value;
}
console.log(`Average odd: ${(sum / gameOdds.length).toFixed(2)}`);

// 3.
for (const [key, value] of gameOdds) {
    // console.log(key, value);
    console.log(
        `Odd of ${game[key] ? "Victory" : "Draw"} ${game[key] ?? ""}: ${value}`
    );
}

// Bonus.
const scorers = {};
for (const [i, name] of [...game.scored.entries()]) {
    if (Object.keys(scorers).includes(name)) {
        scorers[name] += 1;
    } else scorers[name] = 1;
}
console.log(scorers);
