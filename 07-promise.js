const promise1 = new Promise((resolve,reject)=> {
    resolve("DATA CAME IN");
    reject("CONNECT ERROR");
});

//console.log(promise1);

/*
promise1.then(value => {    // we take value of resolve() however
    console.log(value);     // we cant catch the message in reject()
}) */

    /*
// for catch the message in reject()
promise1.catch(err => {
    console.log(err);
}) */

/*
// correct use like chain
promise1
    .then(value=> {
        console.log(value);
    }).catch(error=> {
        console.log(error);
}); */


// example from 06-callback.js file
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

const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject)=>{
        books.push(newBook);
        resolve(books);

        reject("there is an error")
    })
    return promise1;

};

addBook({name: "Book 4", author: "Author 4"})
.then(()=>{
    console.log("NEW LIST");
    listBooks();
}).catch((error)=>{
    console.log(error);
})