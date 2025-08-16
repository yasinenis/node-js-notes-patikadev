import {writeFile,readFile,appendFile,unlink} from 'node:fs';

writeFile('example.json','{"name": "Employee 1 Name","salary":2000}', 'utf8', (err)=>{
    if(err) throw err;
    console.log("write operation succed!");
})

readFile('example.json','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

// for update value
appendFile('example.json', '{"name": "Sensei","salary":4000}','utf8', (err)=>{
    if(err) throw err;
    console.log('file updated succesfully :)')
})

unlink('example.json',(err)=>{
    if(err) throw err;
    console.log('example.json deleted succesfully.')
})
