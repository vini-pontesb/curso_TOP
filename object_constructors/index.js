function Book(title, author, pages) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function () {
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
    }
}
const book1 = new Book("Harry Potter and the Prizioner of Azkabam", "J. K. Rowling", 480);
console.log(book1.info())