var prompt = require('prompt-sync')();

var num = prompt('Enter a number: ');

for (i = 2; i <= num; i++) {
    if ((num % i) == 0) {
        let flag = 1;

        for (j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                flag = 0;
            }
        }

        if (flag == 1) {
            console.log(i);
        }
    }
}