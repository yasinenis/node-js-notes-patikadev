import {readFile, writeFile, appendFile, unlink,mkdir,rmdir} from 'node:fs';

// READING FILE
readFile('password.txt', 'utf8', (err,data) => {
    //what we will return after read operation
    if (err) throw err;
    console.log(data);

    console.log('data read successful')
});

// WRITING FILE
writeFile('example.txt', 'Hello Node.js', 'utf8', (err)=>{
    if(err) throw err;
    console.log('the file has been saved!')
})

// JSON FORMAT
writeFile('example.json', '{"mame": "Arin", "age": 6}', 'utf8', (err)=>{
    if(err) throw err;
    console.log('JSON file has been saved!')
})

// ADDING VALUE
appendFile('example.txt', '\n Node is interesting!', 'utf8', (err)=>{
    if(err) throw err;
    console.log('new value added to example.txt file!')
})

// DELETING FILE
unlink('example.json', (err)=>{
    if(err) console.log(err);
    console.log('example.json deleted succesfully.')
})

// CREATING FILES (create a file and another file inside of it)
mkdir('uploads/img', { recursive: true}, (err) => { 
    if(err)console.log(err); // recrusive true mean is first create uploads file then go on. otherwise it will get an error.
    console.log("FILES HAS BEEN CREATED");
})

// DELETING FILES
rmdir('uploads', { recursive: true}, (err) => { 
    if(err)console.log(err); // if there wasnt recrusive true, then only img file would be deleted.
    console.log("FILES HAS BEEN DELETED SUCCESFULLY");
})

// path
console.log(__dirname)


// global commands (we can control if it is global with adding global keyword)
global.console.log("see this is global");
global.console.log(__dirname);

global.setTimeout(()=>{
    console.log('wait for three seconds');
}, 3000)
