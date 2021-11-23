var prompt = require('prompt-sync')();

let date = prompt('Enter the DATE: ');
let month = prompt('Enter the MONTH: ');

let result = "false";

if ((month <= 6) && (month >= 3)) {
    let monthDay = 30 + (month % 2);

    if((date >= 1) && (date <= monthDay)){
        let days = (month*100) + date;

		if ((days >= 320) && (days <= 620)){
            result="true";
        }
	}
}

console.log(result);