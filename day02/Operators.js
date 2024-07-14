'use strict'
// Arithmetic Operations
// 1. Write a program to add two numbers and log the result in to the console.

let num1=16
let num2=14

let sum = num1 + num2 

console.log(`Result : ${sum}`)

// 2. Write a program to subtract two numbers and log the result to the console.

const subtract=(num1,num2)=>console.log(`${num1} - ${num2} = ${num1-num2}`);
subtract(550,300);

// 3. Write a program to multiply two numbers and log the result to the console.
num1=480;
num2=320;
let multiply=num1*num2;
console.log(`${num1} x ${num2} : ${multiply}`);

// 4. Write a program to divide two numbers and log the result to the console.

num1=500;
num2=50;
let divideResult = num1 / num2 ;
console.log(`${num1} / ${num2} : ${divideResult}`)

// 5. Task 5 : Remainder
num1=7;
num2=2;
let result = num1 % num2 ;
console.log(`${num1} % ${num2} : ${result}`);

// Activity 2 : Assignment Operators

// 6. Use the `+=` operator to add a number and log the result to the console

let RahulScore = 100;
RahulScore+=100;
console.log("RahulScore is ",RahulScore)

// 7. Use the `-=` operator to subtract a number and log the result to the console

let newScore = 100;
newScore-=36;
console.log('NewScore is ',newScore);

// Activity 3 : Comparison Operators

// 8. 
result = 100 < 200
console.log('100 < 200 :',result)

result = 100 > 200
console.log('100 > 200 :',result)

// 9. 
result = 166>=170;
console.log('166 >= 170', result)

result = 170<=170;
console.log('170 <= 170', result)

// 10.
result = 100 == '100'
console.log("100 == '100' : ",result)

result = 100 === '100'
console.log("100 === '100' : ",result)
// strict check, checks the typeof too! Always use strict check!!

// Activity 4 : Logical Operators

// 11. 
let isSunday = true;
let isWorking=true;
let isPlaying=false;

result = isSunday && isPlaying
console.log("isSunday && isPlaying :", result)

isPlaying=true
result = isSunday && isPlaying
console.log("isSunday && isPlaying :", result)
// if both true only then true

// 12.
isPlaying= false
result = isSunday || isPlaying
console.log("isSunday || isPlaying :", result)

isPlaying=true
result = isSunday || isPlaying
console.log("isSunday || isPlaying :", result)
// or if one condition true result is true

// 13. 

console.log("To is Sunday? ",!isSunday)

// ! is not operator.


// Activity 5 : Ternary Operator

// 14.

// condition ? iftrue : isfalse ;

isSunday?console.log("Yay today is Sunday!!"):console.log("Not sunday T_T");

result = 1500 > 2000 ? "yes":"no!";
console.log(result)

// Feature Request

function ArithmeticOperationsScript(ye,vo){
    console.log(`Addition : ${ye} + ${vo} = ${ye+vo}`);
    console.log(`Subtraction : ${ye} - ${vo} = ${ye-vo}`);
    console.log(`Multiplication : ${ye} x ${vo} = ${ye*vo}`);
    console.log(`Division : ${ye} / ${vo} = ${ye/vo}`);
    console.log(`Remainder : ${ye} % ${vo} = ${ye%vo}`);
}

ArithmeticOperationsScript(160,40)

// Comparison and Logical Operators Script 

// Ternary Operator Script

function isNumberPositive (number){
    result = number >= 0 ? `Yes ${number} is Positive.` : `No ${number} is negative`;
    console.log(result);
}

isNumberPositive(100);
isNumberPositive(-12);

// Done!