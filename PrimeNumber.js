var prompt = require('prompt-sync')();

var num = ('Enter a number: ');
let flag = 0;

for (i = 2; i <= (num / 2); i++) {
    if ((num % i) == 0) {
        flag = 1;
    }
}

if (flag == 0) {
    console.log(num + " is a prime number");
}
else {
    console.log(num + " is not a prime number");
}