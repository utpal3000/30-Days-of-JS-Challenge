'use strict'
// day 11
// ### Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using . catch() .

// 1. 
console.log('Task 1:');

let twoSecond = new Promise(function(res,rej){
    setTimeout(() => {
        res(`Promise completed!`);
    }, 2000);
});

twoSecond.then((value)=>console.log("Resolve: ",value)).catch(value=>console.log("Reject:",value));
console.log('Task 2:');

// 2. 
let rejPromise = new Promise(function(res,rej){
    let day = 'Monday';
    if (day=='Sunday') {
        setInterval(()=>{
            res(`successfull`);
        },2000)
    }else {
        setInterval(()=>{
            rej(`Fail`);
        },2000)
    }
});

rejPromise.then((value)=>console.log("Resolve: ",value)).catch(value=>console.log("Reject:",value));

console.log('Task 3:');

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a
// specific order.