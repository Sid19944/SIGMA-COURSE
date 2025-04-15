// For loop

// let i = 1;
// for (i; i <= 10; i++){
//     console.log(i);
// }

// let i = 10;
// for(i; i >= 1; i--){
//     console.log(i);
// }
// console.log(i);

// Print all odd numbers ( 1 to 15 ).
// let i = 15;
// for (i; i >= 1; i--){
//     for(i; i%2 != 0; i--){
//         console.log(i);
//     }
// }
// Reverse.
// let i = 1;
// for (i; i <= 15; i++){
//     for(let j = i; j%2 != 0; j++){
//         console.log(j);
//     }
// }

// Print all even numbers (2 to 20).
// let i = 1;
// for(i; i <= 20; i++){
//     for(let j = i; j % 2 == 0; j++){
//         console.log(j);
//     }
// }
// Reverse.
// let i = 20;
// for(i; i >= 1; i--){
//     for(i; i % 2 == 0; i--){
//         console.log(i);
//     }
// }

// Print the multiplication table of 5.
// let num = prompt("Enter a number: ");
// num = parseInt(num);        // use to convet to int
// for (let i = 1; i <= 10; i++){
//     console.log(num*i);
// }

// for(i = num; i <= n*10; i = i+n){
//     console.log(i);
// }

// Nested for loop
// for(let i = 1; i <= 3; i++){
//     for(let j = i; j <= 3; j++){
//         console.log(j);
//     }
// }

// While loop
// let i = 2;
// while(i<=20){
//     console.log(i);
//     i = i+2;
// }

// Favorite number
// let favNum = "19";
// let guess = prompt("Enter my favorite Number :");
// while(guess != favNum){
//     if(guess == "quite"){
//         alert("You quite the game");
//         break;
//     }
//     guess = prompt("Worn guess, Enter my favorite Number :");
// }
// if(guess == favNum){
//     alert("Congrulation You guess the favorite number.");
// }else {
//     alert("Favorite Number is : 19");
// }

// break Keyword
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     if(i == 3 ){
//         break;
//     }
// }

// Loop with arrays
// let fruits = ["mango","apple","litchi","banana","orange"];
// fruits.push("angur");
// for(let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }


// Nested for loop with array

// let heros = [["Ironman","Thor","Spiderman"],["Superman","wonder women","Flash"]];
// for(let i = 0; i < heros.length; i++){
//     console.log(`list #${i}`);
//     for(let j = 0; j < heros[i].length; j++){
//         console.log(heros[i][j]);
//     }
// }

// let stu = [["Siddharth",98],["Prem",95],["Nitin",94],["Sagar",93]];
// for(let i=0; i<stu.length; i++) {
//     console.log(`Student no.${i+1} :`);
//     for(let j=0; j<stu[i].length; j++) {
//         console.log(stu[i][j]);
//     }
// }

// for of loop .

// let fruits = ["mango","apple","litchi","banana","orange"];
// let fruits = "Siddharth";
// for(fruit of fruits){
//     console.log(fruit);
// }

// let students = ["Siddharth","Prem","Nitin","Sagar","Ujjwal"];
// for(student of students){
//     alert(student);
// }

// Nested for of loop 
// let students = ["Siddharth","Prem","Nitin","Sagar","Ujjwal"];
// for(student of students){
//     for(stu of student){
//         console.log(stu);
//     }
// }

let heros = [["Ironman","Thor","Spiderman"],["Superman","Wonder women","Flash"]];
for(list of heros){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}