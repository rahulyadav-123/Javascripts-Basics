var prompt = require('prompt-sync')();

var value = prompt("Enter the number for the unit conversion: ");
var num = prompt('Enter 1. Feet to Inch ' + '2. Feet to Meter ' + '3. Inch to Feet ' + '4. Meter to Feet option: ');

switch(Number(num)) {
    case 1: 
        let feetToInch = value * 12;
        console.log("Feet to Inch: " +feetToInch);
        break;
    case 2: 
        let feetToMeter = value / 3.281;
        console.log("Feet to Meter: " +feetToMeter);
        break;
    case 3: 
        let inchToFeet = value / 12;
        console.log("Inch to Feet: " + inchToFeet);
        break;
    case 4: 
        let meterToFeet = value * 3.281;
        console.log("Meter to Feet: " + meterToFeet);
        break;
    default:
        console.log("You have entered the wrong input.");
        break;
}