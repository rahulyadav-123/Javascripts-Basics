var prompt = require('prompt-sync')();

var num = prompt("Enter number: ");

let i = 0
while (i <= num) {
    let powerOfTwo = Math.pow(2, i);
    if (powerOfTwo <= 256) {
        console.log(powerOfTwo);
        i++;
    }
    else {
        break;
    }
}
