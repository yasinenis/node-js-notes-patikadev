function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Datas trying to be collected..")

        if (data) {
            resolve("data has been collected")
        } else {
            reject("data hasn't been collected")
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Datas cleaning..");

        if (receivedData) {
            resolve("Data has been cleaned")
        } else {
            reject("Data hasnt been cleaned")
        }
    })
}

/*
getData(true)
.then(result=>{
    console.log(result)
    return cleanData(false)
}).then(result=>{
    console.log(result);
}).catch(error => {
    console.log(error);
})
*/

// Async - await version of prev example
async function processData() {
console.log("🔻");
    try {
        const receivedData = await getData(true) // we consider data correctly sended our function , thats why here is true
        console.log(receivedData)
        const cleanedData = await cleanData(true)
        console.log(cleanedData);
    } catch (error) {
        console.log(error);
    }

console.log("🔺")
}

processData();



// example from 07-promise file (make it with async-await struct)
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


/*
addBook({name: "Book 4", author: "Author 4"})
.then(()=>{
    console.log("NEW LIST");
    listBooks();
}).catch((error)=>{
    console.log(error);
}) */

async function showBooks() {
    try{
        await addBook({name: "Book 12", author: "Author 12"})
        listBooks();
    } catch (error) {
        console.log(error)
    }
    
}

showBooks()