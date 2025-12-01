let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
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
        const hint = userInput < ans ? 'Higher' : 'Lower';
        alert(`Incorrect answer. ${hint} number please`)
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }



}
