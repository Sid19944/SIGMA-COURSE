// Q.1

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// Q.2          Math.floor method for counting the numbers.

// let number = 233537456;
// let count = 0;
// let copy = number;
// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// Q.3

// let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy>0){
//     let digit = copy%10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// Q.4
// let num = 3;
// let factorial = 1;
// for(let i=1; i<=num; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// Q.5
let arr = [10,20,96,30,14,53];
let larNum = 0;
for(let i=0; i<arr.length; i++){
    if(larNum<=arr[i]){
        larNum = arr[i];
    }
}
console.log(larNum);