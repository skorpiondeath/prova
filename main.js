// main.js
var greetings = require("./greetings.js");
var text = require('text');

console.log("Chiamo greetings: " + greetings.sayHelloInItalian());
console.log("Criptata: " + text.encode64(greetings.sayHelloInItalian()));
