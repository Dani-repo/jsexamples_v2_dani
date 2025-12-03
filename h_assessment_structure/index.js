const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID / MSG_WELCOME message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry.";
const MSG_WELCOME = "\n╔══════════════════════════╗\n║ Welcome to Find Your Hat ║\n╚══════════════════════════╝\n"; 

// DONE: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds, you lost!";

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2; //variable that set the % of randomisation of holes in the game fieldto 20%

class Field {
  /**
   * DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field  - field is passed in as an Array to populate the property field of this class' instance
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;    /* game is by default = false (not started) */
    this.playerPosition = { x: 0, y: 0 }; /* player starting position by default {x:0, y:0} */
  }

  // DONE: generateField is a static method, returning a 2D array of the fields
  /**
   * 
   * @param {Number} rows     - rows for the field
   * @param {Number} cols     - cols for the field
   * @param {Number} percent  - percentage of the random holes 
   * @returns {Array}         - 2D array to be used by instance of the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {

    const map = new Array();

    // generate fields by rows and cols passed in
    for (let row = 0; row < rows; row++) {    // for each row
      map[row] = new Array();                 // create a new array

      for (let col = 0; col < cols; col++) {  // for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE;                // use Math.random() to randomise the hole in the map
      }
    }

    return map;
  }

  // DONE: welcomeMessage is a static method, displays a string
  /**
 * @param {String} msg - is a string value to print out to the user to start the game
 */
  static welcomeMessage(msg) {
    console.log(msg);
  }
  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    //the position of the hat- prevent hat position from x:0, y:0 (Player's default position)
    const xHat = Math.floor(Math.random() * ROWS - 1) + 1;  // 0 - 0.999999999999
    const yHat = Math.floor(Math.random() * COLS - 1) + 1;
    this.field[xHat][yHat] = HAT;
  }

  // TODO: printField displays the updated status of the field
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""));
    });
  }

  // DONE: updateMove displays the move (key) entered by the user
  /**
   * 
   * @param {string} m  - passes in the value representing the player's move
   * @returns 
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);
    if (m === DOWN) return console.log(MSG_DOWN);
    if (m === LEFT) return console.log(MSG_LEFT);
    if (m === RIGHT) return console.log(MSG_RIGHT);
    if (m === QUIT) return console.log(MSG_QUIT);
    return console.log(MSG_INVALID);
  }

  // !! TODO: updateGame Assessment Challenge
  /**
   * 
   * @param {*} m - accept the value of the player's move (UP/DOWN/LEFT/RIGHT)
   */
  updateGame(m = "") {
    // capture the player's currX and currY position first
    // update the field to show the player's new position
    // 1. when player move, update the map to show player's new position
    // 2. if the player's x&y position is a HOLE
    // LOSE
    // process.exit();
    // 3. if the player's x&y position is out of the map (OUT)
    // LOSE
    // process.exit();
    // 4. if the player reach the hat (^), 
    // WIN
    // process.exit();
    // otherwise, move the player to the new x and y position based on move
  }

  //  DONE: start() a method of the class to start the game
  start() {
    //if unplayed due to blocked
    //if(hatBlocked(this.field) && !this.gamePlay)
    // then this.field = Field.generateField(); /*regenerate the field
    this.gamePlay = true;       //start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
    this.setHat();              // the position of the hat
    // this.printField();          //print the formated field

    // while gamePlay = true, track player's move and update
    do {
      this.printField();          //print the formated field
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          this.gamePlay = false;
          break;
        default:
          this.updateMove();  //represents invalid entry
          break;
      }

      // if(input === QUIT){
      //   this.gamePlay = false; // another way to end program: process.exit()
      // }

      this.updateGame(input)

    } while (this.gamePlay);

  }
}


// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);
// console.log(gameField); /* test output the field*/
// DONE: Generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField)
// console.log(game.field)  /* test game field display */

// DONE: Invoke method start(...) from the instance of game object
game.start();