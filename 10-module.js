function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j ===0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

function myFunc2() {
    console.log("my-add-function 2")
}

function myFunc3() {
    console.log("my-add-function 3")
}


function myFunc4() {
    console.log("my-add-function 4")
}


function myFunc5() {
    console.log("my-add-function 5")
}

function myFunc6() {
    console.log("my-add-function 6")
}


module.exports = showPrimeNumbers; // now you can use this func from another files
// alternative export way
module.exports = {
    showPrimeNumbers,
    myFunc2,
    myFunc3
}

// ES6 IMPORT syntax
export default myFunc4;

// for too many funct..
export {
    myFunc5,
    myFunc6
}