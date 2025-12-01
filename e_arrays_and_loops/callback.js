<<<<<<< HEAD
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
=======
// Using a Promise Object that takes in callback function to create a delay
const sleep = async (delay) => new Promise((resolve) => setTimeout(() => {
  console.log("I am sleeping for two seconds.");
  return resolve();
}, delay));

await sleep(2000);

// When using setTimeout, we are essentially applying a callback function as well
// After two seconds, setTimeout should run the callback function with console.log(...)
setTimeout(() => {
  console.log("I've been waiting for 2 seconds.");
}, 2000);

>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
