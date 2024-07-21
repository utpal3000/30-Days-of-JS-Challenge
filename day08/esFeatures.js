'use strict'
// day 8

// 1.
// Use template literals to create a string that includes variables for a person's name and age, and log the string to the console

let username = "Utpal";
let age = 24;
console.log(`My name is ${username} and I am ${age} years old.`);

// 2. multi-line string

let multiLine = `Hello
World
My
Name
Is
Utpal
`;
console.log(multiLine);

// 3. Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first, second);

// 4. Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "Harry Potter",
    author: "J.K. Rowling"
};
let { title, author } = book;
console.log(title, author);

// 5. Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let fruits = ["apple", "banana", "grapes"];
let newFruits = [...fruits, "mango", "cherry"];
console.log(newFruits);

// 6. Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log("Sum :",sum(1, 2, 3, 4, 5));

// 7. Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function twoProduct(num1, num2 = 1) {
    return num1 * num2;
}
console.log("twoProduct : ",twoProduct(10, 20));
console.log("twoProduct : ",twoProduct(10));

// 8. Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let obj = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    getDetails: function () {
        return `${this.title} by ${this.author}`;
    }
};
console.log(obj.getDetails());

const person = {
    name: 'Vishal',
    age: 23,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    ['full' + 'Name']: `Vishal Sahu`
  };
  
  console.log(person.name);
  console.log(person.age); 
  person.greet(); 
  console.log(person.fullName); 

// 9. Create an object with computed property names based on variables and log the object to the console.

let obj1 = {
    [username]: 24
};
console.log(obj1);

// Done.