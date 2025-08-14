> node 

### REPL COMMANDS

> .load 03-test.js
-> 
console.log('Önemli bir bildirim TEST.JS');
Önemli bir bildirim TEST.JS

> let name = 'Fatma';

> console.log(name);
-> Fatma

> class Employee {  
| sayName(name) {
| console.log(`Benim adım: ${name} `)
| }
| }
undefined
> let employee1 = new Employee();
undefined
> employee1.name = 'Mustafa';
'Mustafa'
> employee1
Employee { name: 'Mustafa' }
>