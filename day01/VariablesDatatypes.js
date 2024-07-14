// 1
var CarNumber; // Declaring a var

CarNumber = 1064; // assigning a number 

console.log(CarNumber); // logging it to console.
//1064


// 2
let userName;
userName='Dragon';
console.log(userName);
//Dragon

// 3 
// wrong
// const isMonday;
//Uncaught SyntaxError: Missing initializer in const declaration

// when declaring a const it's value must be assigned.

//correct
const isMonday = false;
console.log(isMonday);
//false


// 4
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
// Array is object in JS

// Act 4 
let movie;
movie = 'MIB'
console.log(movie);
movie='Ra.one'
console.log(movie);

// Act 5

const road = 'Highway'
// road = 'NH'
// road = 'NH'
//      ^
// TypeError: Assignment to constant variable.

// Feature request 
// 1
const varTypeLog=(data)=>{console.log("value :",data);console.log("type :",typeof(data))};

varTypeLog(454);
varTypeLog('I love music')
varTypeLog(false)
varTypeLog(4.34)

// 2
let fish = 'swim'
fish = 'eat'

const bird='fly'
//bird = 'swim' // Throws error
// bird = 'swim'
//      ^
// TypeError: Assignment to constant variable.


// Done!