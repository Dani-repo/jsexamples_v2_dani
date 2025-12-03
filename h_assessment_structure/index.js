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
const MSG_WELCOME = "\n╔══════════════════════════════╗\n║   Welcome to Find Your Hat   ║\n╚══════════════════════════════╝";

// DONE: WIN / LOSE / OUT / QUIT messages constants
const WIN = "┌─────────────────────────────┐\n│  Congratulations, you won!  │\n└─────────────────────────────┘";
const LOSE = "°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\nYou fell into a hole, you lost!\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n";
const OUT = "********************************\nYou went out-of-field, you lost!\n********************************\n";

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;    /* set number of rows to 10 */
const COLS = 15;    /* set number of columns to 15 */
const PERCENT = 0.2; //variable that set the % of randomisation of holes in the game field to 20%

// track player's position; initialised to row 0, col 0
let currX = 0;
let currY = 0;

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
  // default rows, cols and hole percentage values in case not passed in
  // percent = 0.1 represents approximately 10% holes in the entire field 
  static generateField(rows = 10, cols = 5, percent = 0.1) {
    // instantiate a new array called map
    const map = new Array();
    // generate fields by rows and cols
    for (let row = 0; row < rows; row++) {    // for each row
      map[row] = new Array();                 // create a new array
      for (let col = 0; col < cols; col++) {  // for each col
        //populate the field with GRASS and HOLE
        //use Math.random() to randomise the hole in the map
        map[row][col] = Math.random() > percent ? GRASS : HOLE;
      }
    }
    return map;
  }

  // DONE: welcomeMessage is a static method, displays the top banner
  /**
 * @param {String} msg - is a string value to print out to the user to start the game
 */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  //display instructions to play
  playInstruction() {
    console.log("┌──────────────────────────────┐");
    console.log("│       W              ↑       │");
    console.log("│    A  S  D        ←  ↓  →    │");
    console.log("│                              │");
    console.log("│         (Q) to exit          │");
    console.log("└──────────────────────────────┘");
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    // the position of the hat- prevent hat position from x:0, y:0 (Player's default position)
    const xHat = Math.floor(Math.random() * ROWS - 1) + 1;
    const yHat = Math.floor(Math.random() * COLS - 1) + 1;
    this.field[xHat][yHat] = HAT;
  }

  // DONE: printField displays the updated status of the field
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
  updateMessage(m = "") {
    if (m === UP) return console.log(MSG_UP);
    if (m === DOWN) return console.log(MSG_DOWN);
    if (m === LEFT) return console.log(MSG_LEFT);
    if (m === RIGHT) return console.log(MSG_RIGHT);
    if (m === QUIT) return console.log(MSG_QUIT);
    return console.log(MSG_INVALID);
  }

  // DONE: updateGame Assessment Challenge

  /**
   * 
   * @param {*} m - accept the value of the player's move (UP/DOWN/LEFT/RIGHT)
   */
  updateGame(m = "") {
    // update the field to show the player's new position
    // 1. if the cell of the player's new position is out of the map (OUT)
    // display out of field message and terminate the process (exit to terminal prompt)
    if (currX < 0 || currY < 0 || currX >= COLS || currY >= ROWS) {
      console.log(OUT);
      this.gamePlay = false;
      process.exit();
    }

    // 2. if the cell of the player's new position contains a HOLE ("O")
    // display fell into a hole message and terminate the process (exit to terminal prompt)
    if (this.field[currY][currX] == HOLE) {
      console.log(LOSE);
      this.gamePlay = false;
      process.exit();
    }

    // 3. if the cell of the player's new position contains a hat ("^""), 
    // display found the hat message and terminate the process (exit to terminal prompt)
    if (this.field[currY][currX] == HAT) {
      console.log(WIN);
      this.gamePlay = false;
      process.exit();
    }

    // 4. otherwise, move the player to the new cell position based on player's selected move
    // and update the map to show player's new position
    if (this.gamePlay) this.field[currY][currX] = PLAYER;
  }

  //  DONE: start() is the method of the class to start the game
  start() {
    this.playInstruction();     /* display instructions to play */
    this.gamePlay = true;       /* flag to indicate that the game has started */
    this.field[0][0] = PLAYER;  /* positioning the player on the default position: row 0, col 0 */
    this.setHat();              /* positioning the hat */
    let input = "";     /* set initial input to blank */

    // while gamePlay = true, track player's move and update
    do {
      // to have better display experience, the play area is cleared everytime the field is updated.
      //console.clear() works on windows command prompt, PowerShell and WSL 
      // console.clear() but has no effect in Git Bash
      console.clear();
      Field.welcomeMessage(MSG_WELCOME); /* Display a welcome message */
      this.playInstruction();            /* Display instruction to play */
      this.printField();                 /* Print the formated field */

      // prompt user for input.
      // player's current position is updated with new values of currX and currY 
      // based on move selected by the user
      if (input) this.updateMessage(input);
      input = prompt("Your move: ");
      switch (input.toLowerCase()) {
        case UP:
          this.updateMessage(UP);
          currY--;                /* row number reduces by 1 */
          break;
        case DOWN:
          this.updateMessage(DOWN);
          currY++;                /* row number increases by 1 */
          break;
        case LEFT:
          this.updateMessage(LEFT);
          currX--;                /* col number reduces by 1 */
          break;
        case RIGHT:
          this.updateMessage(RIGHT);
          currX++;                /* col number increases by 1 */
          break;
        case QUIT:
          this.updateMessage(QUIT);
          this.gamePlay = false;  /* stop the game */
          break;
        default:
          this.updateMessage();  /* represents invalid entry */
      }
      this.updateGame(input);     /* update game status: LOSE/WIN/exit */
    } while (this.gamePlay);
    // continue with the loop until gamePlay is set to false
  }
}


// DONE: Generate a new field - using Field's static method: generateField()
// arguments passed: number of rows, number of columns and hole percentage
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Create a new instance of the game called game
const game = new Field(gameField)

// DONE: Invoke start() method from the instance of game object
game.start();