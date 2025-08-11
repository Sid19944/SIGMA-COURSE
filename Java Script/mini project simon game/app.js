let gameSeq = [];
let userSeq = [];

let btns = ["yellow","green","red","purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp() {
    level++;
    if(level > 10){
        // console.log("game Over")
        gameOver();
    } else {
    h3.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randomBtn);
    }
    userSeq = [];
}

let allBtns = document.querySelectorAll(".btn");        // user's entry
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your <b>score<b> was ${level-1}<br> Press any key to start!`;
        maxScore(level);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        document.backgroundColor = "red";
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    console.log(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function gameOver(){
    h3.innerHTML = `Congrulation you score the max score ${level-1}<br>
    Press any key to restert the game`;
    reset();
}

let max = [0];
function maxScore(level){
    let h4 = document.querySelector("h4");
    if(max[0]<level){
        h4.innerHTML = `Highest Score ${level-1}`;
        max.pop();
        max.push(level-1);
    }
}