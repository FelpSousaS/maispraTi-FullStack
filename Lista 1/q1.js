const prompt = require('prompt-sync')({ sigint: true });

let temperatura = parseFloat(prompt('Insira uam temperatura em Celsius: '));
let F = temperatura * (9 / 5) + 32;
console.log('A temperatura em Fahrenheit é: ' + F);
