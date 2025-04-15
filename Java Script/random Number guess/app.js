const maxN = prompt("Enter Max Number");
const num = Math.ceil(Math.random()*maxN);
let guessN = prompt(`Guess the number from 1 to ${maxN}`);
console.log(num);
while(guessN != num){
    if(guessN == "quite"){
        alert("Quiting the game!!");
        break;
    }
    if(guessN > num){
        guessN = prompt("Try some less number");
    } else {
        guessN = prompt("Try some greater number");
    }
}
if(guessN == num){
    alert(`Congratulation you guess the right number: ${num}`);
}