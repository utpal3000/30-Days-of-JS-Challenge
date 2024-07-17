`use strict`
// day 4

// 1. 1 to 10

for (let i=1;i<=10;i++){
    console.log(i)
}

// 2. table of 5

for (let index = 1; index < 11; index++) {
    console.log(`5 x ${index} = ${index*5}`);  
}

// While loop
// 3. sum of numbers 

let sum = 0;
let number = 1
while (number<10) {
    sum += number;
    // number+=number; // dumb! this doubles the number not increment it by 1
    number++
}
console.log("Sum of numbers 1 to 10 : ",sum)
// console.log('#',number);
// 4. print numbers from 10 to 1 

number = 10;
while (number>0){
    console.log(number);
    number--;
}
// console.log('#',number);

// Do...while loop
console.log("Do...while loop : ");
// 5. print numbers from 1 to 5
number = 1;
do {
    console.log(number);
    number++;
} while (number<6);
// console.log('#',number);

// 6. factorial

number = 0;
let fact=1;
let i = 1;
do {
    fact = fact * i;
    i++;
} while (i<=number);
console.log(`Factorial of ${number} : ${fact}`)

// a bug here is that it does not give correct answer if number is 0

// now after using i and going from 1 to num, it is correct.

// Nested loops

// 7. pattern 
let rows = 5;
// let pattern='';
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    };

// Loop control Statements

// 8. 1 to 10, but skip the number 5 
// skip 5 using continue
console.log('# continue');
for (let index = 1; index<=10; index++){
    if (index == 5){
      continue
    }
    console.log(index)
  }
  
  // 9. break at 7
  console.log('Break :');
  for (let index = 1; index<=10; index++){
    if (index == 7){
      break
    }
    console.log(index)
  }


// --- //
