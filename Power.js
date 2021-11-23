var prompt = require('prompt-sync')();

var num = prompt('Enter a number: ');

for (i = 0; i <= num; i++) {
    let powerOfTwo = Math.pow(2, i)
    console.log(powerOfTwo);
}