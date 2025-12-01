// //Allowable movements
// const UP = "w";
// const DOWN = "s";
// const LEFT = "a";
// const RIGHT = "d";

// // Track the movements of a player
// let move = "s";

// switch (move) {
//   case UP:
//     console.log("Moving up");
//     break;
//   case DOWN:
//     console.log("Moving down");
//     break;
//   case LEFT:
//     console.log("Moving left");
//     break;
//   case RIGHT:
//     console.log("Moving right");
//     break;
//   default:
//     console.log("Invalid direction!");
//     break;
// }

const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";

let key1 = "w";
let key2 = "";

// Combine inputs into a string key
let comboMoves = `${key1}-${key2}`;

switch (comboMoves) {
    case "w-":
        console.log("Going UP");
        break;
    case "w-s":
        console.log("Going nowhere");
        break;
    case "w-d":
        console.log("Going North East");
        break;
    case "w-a":
        console.log("Going North West");
        break;
    case "s-d":
        console.log("Going South East");
        break;
    case "s-a":
        console.log("Going Soutth West");
        break;
    case "a-d":
        console.log("stay in location");
        break;
    default:
        console.log("Unhandled combination of inputs.");
}
