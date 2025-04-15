// Qs.1 Write an arrow function names arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arr = [165,123,120,40,340];

let arrayAverage = (arr)=>{
    let avg = 0;
    for(let i=0; i<arr.length; i++){
        avg+=arr[i];
    }
    return avg/arr.length;
}
console.log(arrayAverage(arr));

// Qs.2 Write an arrow function names isEven() taht takes a single numbers as argument and returns if it even or not.
let isEven = (n) => (n%2 == 0);
    // {
    // if (n%2 != 0) {
    //     return "odd";
    // } else {
    //     return "even";
    // }
// }
let n = 23;
console.log(isEven(n));

// Qs. 3
const object = {
    message : `Hwllo, World!`,
    logMessage() {
        console.log(this.message);
    }
};
// setTimeout(object.logMessage,1000);

// Qs. 4
let a = 4;
function callback() {
    console.log(this.a);
}
const ob = {
    a : 5,
    method(callback) {
        callback();
    },
};
ob.method(callback);