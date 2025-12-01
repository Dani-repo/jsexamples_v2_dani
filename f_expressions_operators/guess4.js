const ans = 88;         // actual answer

const feedbackGuess = "Guess the number.";        // ask user to guess a number
const feedbackQuit = "Press [q] or [Q] to quit."; // allow user to quit
const feedbackCorrect = "Your answer is correct.";
const feedbackWrong = "Your answer is wrong.";
const feedbackTooHigh = "Lower number please. Try again";
const feedbackTooLow = "Higher number please. Try again";
const feedbackEmpty = "Your answer is empty.";


// let userInput = prompt(feedbackGuess + " " + feedbackQuit).toLowerCase();
let userInput = prompt(feedbackGuess.concat(" " + feedbackQuit)).toLowerCase();
// alert(userInput), convert input to lowercase
while (userInput !== 'q') {

    let correctAns = false;         /* flag; starts with alse */
    let feedback = "";              /* message placeholder as empty string "" */

    switch (true) {
        case (Number(userInput) === ans || text2num(userInput)===ans): /* answer is correct */
            correctAns = true;
            feedback = feedbackCorrect;
            break;
        case (!userInput): /* answer is empty (boolean value of empty string is false)*/
            correctAns = false;
            feedback = feedbackEmpty;
            break;
        case (Number(userInput) > ans || text2num(userInput) > ans): /* answer is too high */
            correctAns = false;
            feedback = feedbackTooHigh;
            break;
        case (Number(userInput) < ans || text2num(userInput) < ans): /* answer is too low */
            correctAns = false;
            feedback = feedbackTooLow;
            break;

        default:
            correctAns = false;     /* answer is wrong */
            feedback = feedbackWrong;
    }
    alert(feedback);

    if (correctAns) {
        break; 
    }
userInput = prompt(feedbackGuess.concat(" " + feedbackQuit)).toLowerCase();
}


