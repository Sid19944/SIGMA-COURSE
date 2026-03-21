// let msg = "   hello  ";
// console.log(msg.trim());
// console.log(msg);

// lower & upper case.
// let str = "Siddharth Sarkar";
// let upperCase = str.toUpperCase();
// let lowelCase = str.toLowerCase();
// console.log(upperCase);
// console.log(lowelCase);

// Found the index of value         Uing : indexOf();
// let str = "ILoveCoading";
// console.log(str.indexOf("o"));
// console.log(str.indexOf("s"));

// Apply more than one methods is one value.
// let str = "  Siddharth  ";
// let newStr = str.trim().toUpperCase();  //SIDDHARTH
// console.log(newStr);

// Apply slice method.
// let str = "ILoveCoading";
// console.log(str.slice(1,5));
// console.log(str.slice(-2));

// How to replace the value is the string
// let str = "ILoveCoading";
// console.log(str.replace("Love","Do"));   //  IDoCoading

// repeat method
// let str = "Mango ";
// console.log(str.repeat(5));

// Q. convert it to upperCase
// let str = " help!";
// let newStr = str.toUpperCase().trim();
// console.log(newStr);

// Q. find the new output.
// let str = "ApnaCollege";
// console.log(str.slice(4,9));
// console.log(str.indexOf("na"));
// console.log(str.replace("Apna", "Our"));

// Array
// let nums = [2,4,6,8];
// let marks = [80,90,93,94,85];
// let students = ["siddharth", "prem","nitin","ujjwal","sagar"];
// let info = ["siddharth", 90,"%", 10,"lpa"];
// let emparr = [];
// console.log(nums);
// console.log(marks);
// console.log(students);
// console.log(info);
// console.log(emparr);


// Array methods.   (push, pop, unshift, shift);
// let cars = ["BMW","Audi","Maruti","RR"];
// cars.push("Farari");
// console.log(cars);
// cars.push("Toyota");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.unshift("Toyota");
// console.log(cars);
// cars.shift();
// console.log(cars);

// Q. For the given start of an array. change it to final form using methods.

// let start = ["january","july","march","august"];
// start.shift();
// start.shift();
// start.unshift("june");
// start.unshift("july");
// console.log(start);

// Array methods (indexOf, includes, concat, reverse, slice);

// let primary = ["red","green","blue"];
// let secondary = ["orange", "voilet","yellow"];
// console.log(primary.indexOf("red"));
// console.log(primary.indexOf("black"));

// console.log(primary.includes("red"));
// console.log(primary.includes("black"));

// let newArr = (primary.concat(secondary));
// console.log(newArr);

// console.log(primary.reverse());         
// console.log(newArr.reverse());
// console.log(primary.reverse());

// console.log(newArr.slice());
// console.log(newArr.slice(2));
// console.log(newArr.slice(2,3));
// console.log(newArr.slice(-2));

// Q. For the given starts of array, change it to final form using splice.

// let start = ["january","july","march","august"];
// start.splice(0,2,"july","june");     // website
// start.splice(0,1);
// start.splice(1,0,"june");
// console.log(start);

// Q. Return the index of the "javascript" form the fiven array, if it was reversed.
// let lang = ["c","c++","html","javascript","python","java","c#","sql"];
// console.log(lang.reverse().indexOf("javascript")); //first reverse the lang than find the indexOf javascript.  
// console.log(lang.indexOf("javascript"));     //my


// Array Reference
// let arr = ["a","b"];
// let arrCopy = arr;
// console.log(arrCopy);
// arrCopy.push("c");
// console.log(arr);

// Nested Array
// let nums = [ [1,2],[3,4],[5,6] ];
// console.log(nums);

// Q. Create a nested array to show the following tic-tac-toe game state.
let game = [["X",null,"O"],[null,"X",null],["O",null,"X"]];
console.log(game);