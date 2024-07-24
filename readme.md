# 30 Days Javascript Challenge

Course link [https://courses.chaicode.com/learn/batch/30-days-of-Javascript-challenge]

## Day 1 : Variables and Data Types

1. Value of the `const` variable must be given during its initilization itself.
2. You can't reassign any value to a const var.
3. You can't redeclare any variable
4. Don't use `var` use only `let` and `const` to declare any variables

## Day 2 : Operators

1. You can easily perform all basic arthematic operations in JS
2. Comparison check is not strict check
3. Strict check `===` checks the value of the var as well as the `typeof`.
4. Use ternary operator `?:;` for only simple if statements like a check for something.

## Day 3 : Control Structures

1. Nested if-else, don't use else-if.
2. Switch case uses strict comparisons, you can NOT use directly support range comparisons. Hence, trick is to use true in swtich expression

```js
let x = 20;
let value;

switch (true){
    case x>10 :
        value='Less';
        break;
    case x>100 :
        value='More';
        break;
    default:
        value='zero';
}
```

Use and operator `&&` and `||` or operator together instead of if-else-if :)

## Day 4 : Loops

1. How to use different loops.
2. In loop outer loop runs for the no. of rows u want the pattern to print where as inner loop is for the col.
3. `continue` and `break` are used to control the flow of for/ while loops.

## Day 5 : Functions


1. `return` is optional in a `function`.
2. Normal function declarations are *hoisted*, while function expressions are not.
3. Arrow functions are best suited for non-method functions (functions not attached to objects) and should not be used as constructors.
4. Arrow functions have their own limitations, such as not having access to the arguments object.
5. A higher-order function (HOF) is a concept in programming where a function accepts another function as an argument and returns a function as its result. In other words, it treats other functions as first-class citizens, allowing them to be used just like other data types (such as strings or numbers) in your code

## Day 6 : Arrays

1. Arrays in JS can store any data types.

    ```js
    let myArray = ['mango','banana',true,100]
    ```

2. Javascript doesn't support negative      indexing. 
Use `length` to check the no. of elements an array has.

1. `push` and `pop` works from the end of array, where as `shift` and `unshift` works from start of array.
2. `shift/unshift` affects the indexing of all the elements in the array.
3. `Push` allows you to push more than one elements at once.

4. `map()`, `reduce()`, `filter()` all are higher order funtions and they take a callback function (CB Funtn )as a parameter.
5. `Reduce()` it take a CB funtn and initial value, [ref. MDN reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)]

6. Use `ForEach` to iterate over an array.
7. 2D array, array inside an array :)
8.  2D array manually or other way like `from()`
[ref. GFG 2D array](https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/)

## Day 7: Objects

1. Ojects in JS

    ```js
    const myObject = {name:'utpal',age:'22',location:'Pune',role:'Dev'}
    ```

2. `ForEach` iterates over the array elements and executes a provided function for each item. However, it doesn’t return any value or anything.

3. `map()` method in JavaScript is used with arrays. It creates a new array by applying a provided function to each element in the original array.

4. Arrow function don't have their `this` context.

## Day 8: ES6+ Features


1. Tempalate literals ie use of backticks to for string, in which u can take variable using `${variable_name}`.

```js
// eg:
const myage=`Age: ${age}`;
```

2. Object literals are cool

3. Object destructing is cool

4. Enchanced object literals with computed property names is cool.


## Day 9 : DOM Manipulations

1. Use `getElementById` to select elements by id name.
2. We can modify text content of an element using `textContent`
3. Use `.style` to style any element.
4. We can add new elements to any element using `appendChild()`
5. Use `remove()` to remove any element/child from an element.
6. Use `lastElementChild` to access the last element of an parent element.
7. We can replace attributes of an element by replacing the orignal.
8. We can add event listner to  buttons using `addEventListener`
9. There are many types of event listener like `mouseover` and `mouseout`.
10. To select an element we can use `querySelector` it selects the first element only.
11. Where as `querySelectorAll` selects all the elements of the given value.

## Day 10 : Event Listeners

1. We have many types of event listeners like `click` for on click, `dblclick` for double click.
2. We have two basic one `mouseover` to trigger and event when hover over the element.
3. Second, `mouseout` to trigger the event when remove mouse from the element.
4. There are two basic key event listener one, `keydown` the event triggers once the user pressed a key where as the `keyup` triggers after the user has pressed the key and released the button.
5. We can prevent default behaviour of any form using  `preventDefault()` for `submit` event.
6. We also have a `change` event it triggers when there's any change in an element such as dropdown menu, a value,etc.
7. Event delegation means handling events on or off child elements of a parent by just using the parent element. Use the trigger on parent it will work for the child too.
8. Dynamucally added child can be through button like  `appendChild()` on button click event.