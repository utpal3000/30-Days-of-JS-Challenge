'use strict'

// let number = 45;
// console.log(number);

// Function Declaration
// 1. even or odd

function evenOdd(number){
    let result=number%2==0?'Even':'Odd';
    console.log(result);
}

evenOdd(12)

// 2. square of a number and return the result

function numberSquare(number){
    let result = number*number;
    return result;
}

console.log("Square of the given number is ", numberSquare(12));

// `Function Expression`

// 3. maximum
let maximum = function (num1, num2) { 
    return (num1>num2)? num1: num2;
};

let result = maximum(14,16);
console.log('Maximum is :',result);

// 4. concatenate two strings

let concatString = (str1,str2) => str1+str2;
result = concatString("Good ", "Night");
console.log('Concatinated string :',result);

// Arrow Functions
//  5. sum of two numbers
let sumTwo = (num1, num2) => num1+num2;
result = sumTwo(44,66)
console.log("Sum :",result);

// 6. Write an arrow function to check if a string contains a specific character and return a boolean value.

let containChar = (str,char)=> str.includes(char);
result = containChar("Apple",'e');
console.log("Does string has that character? ",result);

// Activity 4 : Function Parameters and Default values

// 7. Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function twoProduct(num1,num2=10){
    return num1*num2;
};

console.log(twoProduct(10,20));
console.log(twoProduct(10));

// 8. Write a function that takes a person's name and age and returns a greeting message. Provie a default value for the age.

function greetPerson(name,age=18){
    return `Good Morning ${name}!`
};
console.log(greetPerson('Mohan'));
console.log(greetPerson('Rohan','24'));

// Activity 5 : Higher-Order Functions

// 9. Write a higher-order function that takes a function and a number, and calls teh funtion that many times.
let gMorning = () => console.log(`Good Morning!`);

function callFunction(fun,num) {
    for (let index = 0; index < num; index++) {
        fun();
    }
}
callFunction(gMorning,4);

// 10. Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let grossSalary=(num)=>num*1000;
let netSalary=(num)=>num*0.7;
function mySalary(fun1,fun2,val) {
    return fun2(fun1(val))
}
console.log(mySalary(grossSalary,netSalary,75));

// //