# 30 Days JS Challenge by ChaiCode

## Day 1 : Variables and Data Types

### Activity 1 : Vairable Declaration

1. Declare a variable using `var`, assign it a numbner, and log the value to the console.

```js
var CarNumber; // Declaring a var

CarNumber = 1064; // assigning a number 

console.log(CarNumber); // logging it to console.
//1064

```

2. Declare a variable using `let`, assign it a string, and log the value to the console.

```js
let userName;
userName='Dragon';
console.log(userName);
//Dragon
```

### Activity 2 : Constant Declaration

3. Declare a variable using `const`, assign it a boolean value, and log the value to console.

```js
// wrong
const isMonday;
//Uncaught SyntaxError: Missing initializer in const declaration

// when declaring a const it's value must be assigned.

//correct
const isMonday = false;
console.log(isMonday);
//false
```

### Activity 3 : Data Types 

4. Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.

```js
let day=1;
const month='July';
let isSunday=false;
let mango = {name:'Aam',price:100,from:'Nagpur'};
const weekend=['Saturday','Sunday']

console.log(typeof(day));
console.log(typeof(month));
console.log(typeof(isSunday));
console.log(typeof(mango));
console.log(typeof(weekend));

```
### Activity 4 : Reassigning Variables 

5. Declare a variable using `let`, assign it an initial value, reassign a new
value, and log both values to the console. 

```js
let movie;
movie = 'MIB'
console.log(movie);
movie='Ra.one'
console.log(movie);
```
### Activity 5: Understanding const

6. Try reassigning a variable declared with `const` and
observe the error.

```js
const road = 'Highway'
// road = 'NH'
// road = 'NH'
//      ^
// TypeError: Assignment to constant variable.

```

### Feature Request:
**1. Variable Types Console Log:**

Write a script that declares
variables of different data types and logs both the value and typ
of each variable to the console.

```js
// 1
const varTypeLog=(data)=>{console.log("value :",data);console.log("type :",typeof(data))};

varTypeLog(454);
varTypeLog('I love music')
varTypeLog(false)
varTypeLog(4.34)

```

**2. Reassignment Demo:**

Create a script that demonstrates the
difference in behavior between let and const when it comes
reassignment.

```js
// 2
let fish = 'swim'
fish = 'eat'

const bird='fly'
//bird = 'swim' // Throws error
// bird = 'swim'
//      ^
// TypeError: Assignment to constant variable.
```

**Achievement:**
By the end of these activities, you will:
• Know how to declare variables using `var`, `let`, and `const`.
• Understand the different data types in JavaScript.
• Be able to use the `typeof` operator to identify the data type of a
variable.
• Understand the concept of variable reassignment and the
immutability of `const` variables.
```