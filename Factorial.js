var prompt = require('prompt-sync')();

var num = prompt('Enter a number: ');
let factorial = 1;

for (i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log("Factorial of the " + num + " is : " + factorial);