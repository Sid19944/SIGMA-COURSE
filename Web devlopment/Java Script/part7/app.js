// This. function
let obj = {
    name : "Siddharth",
    age : 20,
    eng : 89,
    math : 90,
    phy : 91,
    getAvg() { 
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
    }
}

// try & catch function 
// try use's, if there is an error then us catch function to executed the next code.
try {
    console.log(a);
} catch {
    console.log("caught an error...");
}

// Arrow function (nameless function)
const sum = (a,b) => {
    console.log(a+b);
}

const cube = (n) => {
    console.log(n*n*n);
}

const pow = (a,b) => {
    console.log(a**b);
}

// Implict return
const mul = (a,b) => (
    a*b
);


// setTimeout function
// console.log("Hi everyown!");
// setTimeout(()=> {
//     console.log("I am Siddharth");
// },3000);
// console.log("Welcome");

// setInterval
// let a = setInterval(()=>{
//     console.log("HI");
// },3000)

// this with arrow function

let info = {
    name : "sid",
    age : 20,
    marks : 78,
    getInfo1 : function() {
        setTimeout(function(){
            console.log(this);  // this is globel
        },2000);
    },
    getInfo2 : function() {
        setTimeout(()=>{
            console.log(this)  // this is parent, info
        },2000);
    }
}

// Pratice  Qs.1 Write an arrow function that returns the square of a number 'n'
let squ = (n)=>(n*n);

// Practice Qs.2 Write a function that prints "Hello World" 5 times at times of 2s each.
let id = setInterval(()=>{
    console.log("Hello World")
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);