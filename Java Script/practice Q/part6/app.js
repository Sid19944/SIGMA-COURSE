// Qs. 1
let arr = [1,23,4,52,54,12,34,7,8,4,32,45];
let num = 10;

function rArr (arr, num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}

rArr(arr,num);

// Qs. 2
let str = "abcdabcdefgggh";
let ans = "";
function unique(str) {
    for(let i=0; i<str.length; i++){
        let curChar = str[i];
        if(ans.indexOf(curChar) == -1){
            ans+=curChar;
        }
    }
    return ans;
}
console.log(unique(str));

// Qs. 3
let country = ["Australia","Germany","United States of America"];
let output = "";
function larCountry(country){
    for(let i=0; i<country.length; i++){
        if(output.length <= country[i].length){
            output = country[i];
        }
    }
    return output;
}

console.log(larCountry(country));

// Qs. 4
let string = "abcdefeviouaaiue";
function countVowels (string){
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(string));

// Qs. 5
let start = 1;
let end = 10;

function random(start,end){
    let dif = end-start;
    let num = Math.ceil(Math.random()*dif+start);
    console.log(num);
}

random(start,end);