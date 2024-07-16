'use strict'

// Day 3

// If-Else Statements

// 1.

let number1 = -23;

// number1 = prompt("Enter a number :");

if (number1>0){
    console.log(`Number ${number1} is positive.`);
}else
if (number1<0){
    console.log(`Number ${number1} is Negative.`);
}else {
    console.log(`Number ${number1} is Zero.`);
}

// 2. eligible to vote

let age = 16;

// age = prompt('Please enter your age :');

// age >= 18 ? console.log('You are eligible to vote!') : console.log(`Nope! you aren't eligible to vote!`);

if (age >=18){
    console.log("Eligible to vote!")
}else {
    console.log("Not eligible to vote")
}


// 3. largest of three numbers

number1 = 6161;
let number2=4114;
let number3=8181;

if (number1 > number2){
    if (number1 > number3) {
        console.log(`Number1 ${number1} is largest`);
    }else{
        console.log(`Number3 ${number3} is largest`)
    }
}else {
    if (number2 > number3) {
    console.log(`Number2 ${number2} is largest`);
    }else {
        console.log(`Number3 ${number3} is largest`)
    }
}

// Switch case

// 4

let dayNumber = 8;
let dayName;

switch (dayNumber){
    case 1 : 
        dayName = 'Monday'
        console.log(dayName)
        break;
    case 2 : 
        dayName = 'Tuesday'
        console.log(dayName)
        break;
    case 3 : 
        dayName = 'Wednesday'
        console.log(dayName)
        break;
    case 4 : 
        dayName = 'Thursday'
        console.log(dayName)
        break;
    case 5 : 
        dayName = 'Friday'
        console.log(dayName)
        break;
    case 6 : 
        dayName = 'Saturday'
        console.log(dayName)
        break;
    case 7 : 
        dayName = 'Sunday'
        console.log(dayName)
        break;
    default:
        console.log("How many days does week has??")
        
}



// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// 5 assign a grade


let score = 100;

// 90-100 - A
// 80-89 - B
// 60-79 - C
// 30 - 59 - D
// 1-29 - F

let grade;
score = 90;

switch (true) {
    case score >= 90 :
        grade = 'A';
        break;
    case score >= 80 && score <90 :
        grade = 'B';
        break;
    case score >= 60 && score <80:
        grade = 'C';
        break;
    case score >= 30 && score <60:
        grade = 'D';
        break;
    case score < 30 :
        grade = 'F';
        break;
    default:
        grade = 'NOT VALID MARKS'
    
}


console.log(`Student's grade is ${grade}`)

// --- 

// Conditional (Ternary) Operator

// 6. even or odd

let value = 712

let result = value%2==0 ? "Even" : "Odd";

console.log(`Value ${value} is ${result} number.`)

// ---

// Combining Conditions

// 7. leap year

// by 4 not by 100 - leap
// by 4 by 100 by 400 - leap

let year;
year=2100

// my solution
if (year%4==0 && year %100 != 0){
    result='leap';
}else if (year % 4 == 0 && year %100 == 0 && year %400 == 0){
    result = 'leap'
}else {
    result='NOT leap';
}

// better solution
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    result = 'leap';
} else {
    result = 'NOT leap';
}



console.log(`${year} is ${result} year`);

// --- //

// IDU Feature Requests!! -_-