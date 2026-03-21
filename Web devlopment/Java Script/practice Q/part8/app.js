// Qs.1 Square and sum the given array elements using the arrow function and then find the average of the array
let arr = [1,2,3,4,5];
let square = arr.map((num)=>num*num);
console.log(square);
let sum = square.reduce((num,el)=>num+el);
console.log(sum);
let average = sum/square.length;
console.log(average);

// Qs.2 Create a new array uding the map function whose each element is equal to the origina element plus 5.

let arrPr2 = [1,2,3,4,5];
console.log(arrPr2.map((num)=>num==num+5));

// Qs.3 Create a new array whose elements are in uppercase of words present in the original array.
let arrPr3 = ["sid","sarkar","teacher"];
console.log(arrPr3.map((str)=>str.toUpperCase()));

// Qs.4 Write a function called doubleAndReturnArgs which acceptes an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments double.

let arrPr4 = [1,2,3,4,5];
let doubleAndReturnArgs = (arr,...argu)=>[
    ...arrPr4,
    ...argu.map((num)=>num*2),
];
console.log(doubleAndReturnArgs(arrPr4,10,20));

// Qs.5 Write a function called mergeObjects that accepts two obnects and returns a new object which contains all the keys and values of the first object and second object.
let obj1 = {
    a : 1,
    b : 2,
};
let obj2 = {
    c : 3,
    d : 4,
};

let mergeObj = (obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObj(obj1,obj2));