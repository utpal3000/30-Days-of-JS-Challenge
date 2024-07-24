'use strict'
// 1
let paragraph = document.querySelector("p");
let button = document.querySelector("button");
button.addEventListener('click', () => {
    paragraph.textContent = 'You clicked on the button and changed the paragraph!';
});

// 2
let image = document.querySelector("img");
image.addEventListener('dblclick', () => {
    image.style.visibility = 'hidden';
})

// 3. 
let two=document.querySelector('#two');
two.addEventListener('mouseover', () => {
    two.style.backgroundColor = 'maroon';
})
// 4.
two.addEventListener('mouseout', () => {
    two.style.backgroundColor = '';
})

// Keyboard Events

// 5.Add a keydown event listener to an input field that logs the key pressed to the console.

let input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
    console.log('Key pressed: ', event.key);
})

// 6. Add a keyup event listener to an input field that displays the current value in a paragraph.

input.addEventListener('keyup', (event) => {
    let p = document.querySelector('#thirdpara');
    p.textContent = event.target.value;
})

// Form Events

// 7. Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form data: ', event.target.elements);
})

// 8. Add a change event listener to a select dropdown that displays the selected value in a paragraph.

let citypara = document.querySelector('#city');
let select = document.querySelector('select');
select.addEventListener('change', (event) => {
  citypara.textContent = event.target.value;
});


// 9. Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});

// 10. Add an event listener to a parent element that listens for events from dynamically added child elements.
let addButton = document.querySelector('#addButton');
let parent = document.querySelector('#parent');

addButton.addEventListener('click', () => {
  let child = document.createElement('div');
  child.textContent = 'New Element';
  child.classList.add('bg-pink-200', 'h-full', 'w-20', 'm-1','p-1','rounded');
  parent.appendChild(child);
});

parent.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV') {
    console.log(event.target.textContent);
  }
});

// dynamically adding element

let newChild = document.createElement('div');
newChild.textContent = 'This is a dynamically added element.';
newChild.classList.add('bg-pink-500', 'h-full', 'w-min', 'm-1','p-1','rounded','text-slate-100');
parent.appendChild(newChild);

// done.









