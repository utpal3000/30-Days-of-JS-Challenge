'use strict'
// 1.

let myNumbers = [1,2,3,4,5];

console.log(myNumbers);

// 2. 

let fruits =  ['banana','apple','grapes','orange'];

console.log(`First : ${fruits[0]} \nLast : ${fruits[fruits.length-1]}`);
// console.log(fruits.slice(0,1))
// console.log(fruits.slice(-1))

// 3. 

console.log('Original:',fruits);
fruits.push('mango','cherry')
console.log("After Push:",fruits);
// 4. 
fruits.pop()
console.log("After Pop:",fruits);
// 5. 
fruits.shift()
console.log("After Shift:",fruits);
// 6.
fruits.unshift('Guava')
console.log("After unshift:",fruits);

// array intermediate

// 7. 
let oldArray = [1,2,3,4,5,6,7,8,9];
console.log(`Old Array: ${oldArray}`);
let newArray = oldArray.map((number)=>number*2);
console.log(`New Array: ${newArray}`);

// 8. 
let evenNumbers = oldArray.filter((number)=>number%2==0);
console.log(`Even Numbers : ${evenNumbers}`);

// 9.
const sumNumbers = oldArray.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of all numbers: ${sumNumbers}`);

// array iteration

// 10. 

// fruits
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
    
}

// 11. 
console.log(`Using forEach on fruits.`);
fruits.forEach((fruit)=>console.log(fruit));

// multi dimentional array
// 12.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// 13. 
console.log(matrix[1][1])

// //
