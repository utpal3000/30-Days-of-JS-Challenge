'use strict'

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let Book = {
    title : 'Coding with Dragon',
    author:'pseduoDragon',
    year:2024
}

console.log(Book)
// we can check the datatype of the book using typeof
console.log(typeof(Book));

// 2. 
console.log(`Title of the book : ${Book.title}\nAuthor of the book : ${Book.author}`)

// 3. 

Book.info = ()=>`Title of the book : ${Book.title}. Author of the book : ${Book.author}.`;

let result = Book.info()
console.log(result);

// 4.
console.log('Original Object :',Book);

Book.new=(newYear)=>{
    Book.year=newYear;
}

Book.new(2025);
console.log(Book);

// 5. 

const library = {
    name: "English Fiction Library",
    books: [
        {
            title: "Game of Thrones",
            author: "George R. R. Martin"
        },
        {
            title: "Lords of the Rings",
            author: "J. R. R. Tolkien"
        },
        {
            title: "Harry Potter",
            author: "Silena Giemx"
        }
    ]
};

console.log(library);
// read the questions correctly -_-

// 6
console.log("Name of libary:",library.name);
// console.log(library.books[0].title);
const libraryName = library.name;
// const bookTitles = library.books.map(book => book.title);

const bookTitles = library.books.map(book => book.title);


console.log("Library Name:", libraryName);
console.log("Book Titles:", bookTitles);

// 7.

console.log(Book);

Book.titleYear=function (){return `Title : ${this.title}, Year : ${this.year}`}
// Book.titleYear=()=>`${this.title}, ${this.year}`
console.log(Book.titleYear());
// console.log(Book);

// 8.
for (const key in Book) {
    console.log(`Property : ${key}, value:${Book[key]}`)
}

// 9.
console.log(Object.keys(Book));
console.log(Object.values(Book));

// //