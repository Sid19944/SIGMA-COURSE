const apple = require("./apple");
const mango = require("./mango");
const orange = require("./orange");

let fruits = [apple,mango,orange];
module.exports = {
    apple : apple,
    mango : mango,
    orange : orange,
}