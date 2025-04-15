// Practice Qs 1.
// function hello() {
//     console.log("Hello");
// }
// function printName() {
//     console.log("Siddharth");
// }
// function print10() {
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// function printSome() {
//     console.log("Twinkel Twinkel, little star");
// }
// // Print a dice game Practice Qs 2
// function dice() {
//     let n = Math.ceil(Math.random()*6);
//     console.log("dice number : ",n);
// }
// dice();
// printSome();
// hello();
// printName();
// print10();


function PrintInfo(name,age) {
    console.log(`${name}'s age is ${age}`);
}

function sum(num1,num2){
    console.log(num1+num2);
}

// Create a function that gives us the average of 3 numbers
function average(num1,num2,num3) {
    console.log((num1+num2+num3)/3);
}

// Create a function that prints the multiplication table of a number.
function table(n){
    for(let i = 1; i<=10; i++){
        console.log(i*n);
    }
}

// Return function
function sumRe(a,b){
    return "1";
}
// let s = sumRe(2,5);
// console.log(s);


// Create a function that returns the sum of numbers from 1 to n.
function oneToN(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    return sum;
}

// Create a function that returns the concatenatoin of all strings in an array
function con(arr){
    let result = "";
    for(let i=0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}
let arr = ["siddharth ","sarkar ","is ","good "];
// console.log(con(arr));


// Function Scope
let gSum = 10;
function calSum(a,b){
    let gSum = a+b;
    // console.log(gSum);
}

calSum(1,2);
// console.log(gSum);

//Block Scope
{
    let a;
}
// console.log(a);


// Lexical Scope
function outerFun() {
    let x = 5;
    let y = 10;
    function innerFun() {
        console.log(x);
    }
    innerFun();
}

// Function Expresseions :
let fSum = function(a,b){
    console.log(a+b);
    return a+b;
}

// Higher order Functions
let greet = function(){
    console.log("Hello");
}
function timesFun(func,n){
    for(let i=0; i<n; i++){
        func();
    }
}
// timesFun(greet,50);
// timesFun(function nam(){console.log("namaste")},100);


// Higher order Function that return function
function oddEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(n%2 !== 0);
        }
    } else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    }
}

// Enter request : "odd" or "even"
request = "even";
let func = oddEvenFactory(request);
//now call the func(n);


// Methode : function usinf the object
// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     },
//     div : function(a,b){
//         return a/b;
//     }
// };
const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};