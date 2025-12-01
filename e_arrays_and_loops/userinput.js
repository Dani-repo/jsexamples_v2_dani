// set prompt function with prompt-synch library
const prompt = require("prompt-sync")({ sigint: true });

// Display prompt in terminal
//let getName = prompt("Please enter your name: ");

// keep prompting until name is entered.

// 1. while loop method (check 1st - then run the while loop)
// while (getName ==="") {
//     getName = prompt("Please enter your name: ");
// }
// console.log(`Welcome, ${getName}`);

/* 2. do-while method (do 1st then check)
must Run the do block at least once.
do {
    getName=prompt("Please enter your name: ");   
} while (getName==="");
console.log(`Welcome, ${getName}`); */


//================================================================
// 3. Game Input

const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

function updateMove(m) {
    if (m === UP) return console.log("You moved up");
    if (m === DOWN) return console.log("You moved down");
    if (m === LEFT) return console.log("You moved left");
    if (m === RIGHT) return console.log("You moved right");
    if (m === QUIT) return console.log("You quit the game");
    console.log("Invalid entry");
}

do {
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

    switch (move.toLowerCase()) {
        case UP:
            updateMove(UP);
            break;
        case DOWN:
            updateMove(DOWN);
            break;
        case LEFT:
            updateMove(LEFT);
            break;
        case RIGHT:
            updateMove(RIGHT);
            break;
        case QUIT:
            updateMove(QUIT);
            break;
        default:
            updateMove();
    }
} while (move.toLowerCase() !== 'q');

