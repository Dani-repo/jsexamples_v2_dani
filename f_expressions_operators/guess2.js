let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
<<<<<<< HEAD
// alert(userInput), convert input to lowercase
while (userInput !== 'q') {
 
    // check if input is the 
    if (Number(userInput) === ans || userInput === ansString) {
        alert('You are correct')
        break;
    }
    else if(!userInput){
        userInput = prompt("Your answer is empty.Please enter a value.").toLowerCase();
    }
    else{
        userInput = prompt("Incorrect answer. \nGuess the number. Press q or Q to quit.").toLowerCase();
    }



=======

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);
    if(Number(userInput) === 10 || userInput === "ten"){                                // correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if(!userInput){                                                                // input empty string, provide an alert and prompt
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }
    else{                                                                               // wrong answer, provide an alert and prompt
        alert("Answer incorrect.");
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}
