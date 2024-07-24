'use strict'
// day 11
// ### Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using . catch() .

// 1. 

let twoSecond = new Promise(function(res,rej){
    setTimeout(() => {
        res(`Promise completed!`);
    }, 2000);
});

twoSecond.then((value)=>console.log("Resolve: ",value))
