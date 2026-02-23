const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");
const myLibray = []

form.addEventListener("submit", addBookToLibrary);

function Book(title, author, pages, read) {
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read/*function () {
        let question = parseInt(prompt(`Have you already read the book ${this.title}?\n1 - Yes\n2 - No`))
        if (question === 1) {
            return "already read"
        } else if (question === 2) {
            return "not read yet"
        } else {
            throw Error("You must choose the numbers 1 (Yes) or 2 (No)");
        }
    }
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${pages} pages, ${this.read()}`
    }*/
}

function addBookToLibrary(event) {
    event.preventDefault();
    const book = new Book(title.value, author.value, pages.value, read.value)
    myLibray.push(book)
    console.log("Library:")
    for (let b of myLibray) {
        console.log(`Title - ${b.title}`);
    }
}