var prompt = require('prompt-sync')();

var num = prompt('Enter a number: ');
var sum = 0;

for (i = 1; i <= num; i++) {
    sum += 1 / i;
}
console.log("Harmonic Value for the series is: " + sum);