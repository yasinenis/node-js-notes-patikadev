let x = 5;

console.log("1. data came: ", x);

setTimeout(()=>{
    x=x+5;
    console.log("2. data came: ", x);      // console.log is a callback in setTimeout() here
}, 5000);

x=x+5;
console.log("3. data came: ",x);

// different example
const books = [
    {name: "Book 1", author: "Author 1"},
    {name: "Book 2", author: "Author 2"},
    {name: "Book 3", author: "Author 3"}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}

listBooks();

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
};

console.log("added..")

addBook({name: "Book 4", author: "Author 4"}, listBooks);