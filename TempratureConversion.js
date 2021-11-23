const prompt = require('prompt-sync')();

function celsToFar(temp) {
    degFahr = (9 / 5) * temp + 32;
    console.log("Cel to Fahr conversion value is: " + degFahr);
}

function fahrToCels(temp) {
    degCel = (temp - 32) * (5 / 9);
    console.log("Fahr to Cel conversion value is: " + degCel);
}

let temperature = prompt("Enter temperature: ")
let option = prompt("Enter : 1. Cel to Fahr 2. Fahr to Cel : ");
switch (Number(option)) {
    case 1:
        if (temperature >= 0 && temperature <= 100) {
            celsToFar(temperature);
        }
        else {
            console.log("Temperature out of range.");
        }
        break;
    case 2:
        if (temperature >= 32 && temperature <= 212) {
            fahrToCels(temperature);
        }
        else {
            console.log("Temperature out of range.");
        }
        break;
    default:
        console.log("invalid option!");
        break;
}