// let pencilPrice = 10;
// let erasorPrice = 5;
// // let output = "the total price is : " +(pencilPrice+erasorPrice)+ " Rupees";
// let output = `the total price is : ${pencilPrice+erasorPrice} Rupees`;
// console.log(output);



//Arithmetic Operators:
// let a = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(++a);
// console.log(--b);


//Compration Operator:
// let a = 10;
// let b = 5;
// console.log(a<b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);

//Condition Statement
// console.log("before my if statement");
// let age = 17;
// if(age >= 18){
//     console.log("You can vote");
//     console.log("You can drive");
// }else {
//     console.log("You can't vote");
//     console.log("You can't drive");
// }
// console.log("after my if-else statement");

// Q. Create a traffic lights system that shows to do bades on color.
// let color = "red";
// if(color == "red" ){
//     console.log("You can't go, please stop.");
// }else if (color == "yello"){
//     console.log("Ready for go");
// }else if (color == "green"){
//     console.log("You can go now");
// }else {
//     console.log("Trafic light is broken!!");
// }

// Q. Create a system to calculate popcorn prices based on the size customer asked for:
// let size = "L";
// if (size === "XL") {
//     console.log("Popcorn price is : 250");
// }else if (size === "L") {
//     console.log("Popcorn price is : 200");
// }else if (size === "M") {
//     console.log("Popcorn price is : 100");
// }else if (size === "S") {
//     console.log("Popcorn price is : 50");
// }else {
//     console.log("Enterd size is not valid!!");
// }

// Nested if-else:

// let marks = "55";
// if (marks >= "33") {
//     console.log("Pass");
//     if (marks >=  "80") {
//         console.log("Grade A");
//     }else if (marks >= "60"){
//         console.log("Grade B")
//     }else if (marks >= "40"){
//         console.log("Grade C")
//     }
//     else {
//         console.log("Grade D");
//     }
// }else {
//     console.log("Better luck next time");
// }


// Logical Operators :
// Logical AND (&&)
// let light = "OFF";
// let current = "ON";
// if (light === "ON" && current === "ON"){
//     console.log("Bulb is On");
// } else {
//     console.log("Bulb is OFF")
// }

// Q. A "good string" is a string that starts with the letter 'a' & have a lenght > 3. Write a Program to find if a string is good or not?
// let str = "siddharth";
// if ((str[0] === "s") && (str.length > 3)) {
//     console.log(`${str} is a good string`);
// }else {
//     console.log(`${str} Not a good string`);
// }


// let string = " ";
// if(string) {
//     console.log("String is not empty");
// } else {
//     console.log("String is empty");
// }

// let color = "green";
// switch (color) {
//     case "red" :
//         console.log("Stop");
//         break;
//     case "yellow" :
//         console.log("Slow down");
//         break;
//     case "green" :
//         console.log("Go");
//         break;
//     default :
//     console.log("Broken Light");
// }

// Q. Use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
// let day = 4;
// switch (day) {
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thusday");
//         break;
//     case 5 :
//         console.log("friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
// }


// alert("This is a simple alert!!!");

// let fullName = prompt("Enter your Name");
// console.log(fullName);

let firstName = prompt("Enter your first name :");
let lastName = prompt("Enter your last name :");
let msg = ("Welcome"+" "+firstName+" "+lastName+"!");
alert(msg);