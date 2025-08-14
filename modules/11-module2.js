const primeNumbers = require("./10-module.js")
primeNumbers(50,100);

// alternative ways
const primeNumbers = require("./10-module.js")
primeNumbers.myFunc2();
primeNumbers.myFunc3();

// or you can use with destructor way to object which we used require for get it.
const {showPrimeNumbers, myFunc3} = require("./10-module.js")
showPrimeNumbers(10,22);
myFunc3();

// ES6 IMPORT syntax
import myFunc4 from "./10-module.js";
myFunc4();

// for too many funct.. es6
import { myFunc5, myFunc6 } from "./10-module.js";
myFunc5();
myFunc6();
