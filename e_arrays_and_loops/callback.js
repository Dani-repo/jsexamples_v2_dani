//using a Promise object that takes in Callback function to create a delay 
const sleep= async(delay)=> new Promise((resolve) => setTimeout(() => {
    console.log("I'm sleeping for 2 secs");
    return resolve();
}, delay));
await sleep(2000);


//When using setTimeOut, we are essentially applying a callback function as well
//After 2 seconds, setTimeOut should run the callback function with console.log(...)
setTimeout(()=> {
    console.log("I've been waiting for 2 secs");
},2000);
