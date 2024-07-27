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
    // if (day=='Sunday') {
    //     setInterval(()=>{
    //         res(`successfull`);
    //     },2000)
    // }else {
    //     setInterval(()=>{
    //         rej(`Fail`);
    //     },2000)
    // }
    // Instead we can use setTimeout for single timout for the promise to either resolve or reject.
    setTimeout(() => {
        if (day === 'Sunday') {
            res('successful');
        } else {
            rej('Fail');
        }
    }, 2000);

});

rejPromise.then((value)=>console.log("Resolve: ",value)).catch(value=>console.log("Reject:",value));

console.log('Task 3:');

// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        // Simulate fetching data (e.g., making an API request)
        setTimeout(() => {
            const data = `Data from ${url}`;
            resolve(data);
        }, 1000); // Simulating a 1-second delay
    });
}

// Chain the promises
fetchDataFromServer('https://api.example.com/users')
    .then((data) => {
        console.log(`Received user data: ${data}`);
        return fetchDataFromServer('https://api.example.com/posts');
    })
    .then((data) => {
        console.log(`Received post data: ${data}`);
        return fetchDataFromServer('https://api.example.com/comments');
    })
    .then((data) => {
        console.log(`Received comment data: ${data}`);
    })
    .catch((error) => {
        console.error(`Error fetching data: ${error}`);
    });


// 4. Async function that waits for a promise to resolve and then logs the resovled value.

async function waitForPromiseAndLog(promise) {
        const result = await promise;
        console.log("Resolved value:", result);
    }

// Example usage:
const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Task 4 Completed"), 3000);
});

waitForPromiseAndLog(myPromise);

// 5. async function that handles a rejected promise using try-catch and logs the error message

async function task5Promise(promise) {
    try {
        const result = await promise;
        console.log("Task 5 Resolved value:", result);
    } catch (error) {
        console.error("Task 5 Error:", error);
    }
}

// Example usage:
const testPromise = new Promise((resolve,reject) => {
    reject (new Error("Oops! Something did not went wrong, this is intended error."))
});

task5Promise(testPromise);

// task 6. 