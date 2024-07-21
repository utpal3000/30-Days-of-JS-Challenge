'use strict'

// DOM Manipulation

// 1. Select an HTML element by its ID and change its text content.

let heading = document.getElementById('heading');
heading.textContent = 'DOM Manipulation';

// 2. Select an HTML element by its class and change its background color.

let headingTwo = document.getElementById('heading-two');
headingTwo.style.backgroundColor = 'red';

// 3. Create a new div element with some text content and append it to the body.

let newDiv = document.createElement('div');
newDiv.textContent = 'Made in India with <3';
document.body.appendChild(newDiv);

// 4. Create a new li element and add it to an existing ul list.

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.textContent = 'Watermelon';
ul.appendChild(li)

// 5. Select an HTML element and remove it from the DOM.

let activityTwo = document.getElementById('activity-two');
activityTwo.remove()

// 6. Remove the last child of a specific HTML element.

let activityThree = document.getElementById('activity-three');
activityThree.lastElementChild.remove()

// 7. Select an HTML element and change one of its attributes (e.g., src of an img tag).

let img = document.querySelector('img');
// img.src = 'https://picsum.photos/200/300?red';
img.src = "https://plus.unsplash.com/premium_photo-1663962975850-cdf197b06987?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// 8. Add and remove a CSS class to/from an HTML element.

let activityFour = document.getElementById('activity-four');

activityFour.classList.add('text-center');
activityFour.classList.remove('text-red-800')

// 9. Add a click event listener to a button that changes the text content of a paragraph.

let paragraph = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', () => {
    paragraph.textContent = 'Congratulations! You clicked the button.';
});

// 10. Add a mouseover event listener to an element that changes its border color.

let activityFive = document.getElementById('activity-five');
activityFive.addEventListener('mouseover', () => {
    activityFive.style.borderColor = 'red';
});
activityFive.addEventListener('mouseout', () => {
    activityFive.style.borderColor = ''; // Reset to default border color
});

// done.

