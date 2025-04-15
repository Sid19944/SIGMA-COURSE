let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue" ,"purple"];

let h3 = document.querySelector("h3");
let level = 0;
let started = false;


document.addEventListener("keypress",function(){
    if (started == false) {
        console.log("game started!");
        started = true;
        levelUp();
    }
})

function levelUp(){
    level++;
    if( level < 10 ) {
    h3.innerHTML = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    gameFlash(randomBtn);
    userSeq = [];
    } else {
        gameOver();
    }
    
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },150);
    console.log(gameSeq);
}

// USER'S ENTRY
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let btnColor = btn.getAttribute("id");
    console.log(btnColor);
    userSeq.push(btnColor);

    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },150)
}

function checkAns(idx){
    if (userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,200);
        }
    } else {
        h3.innerHTML = `Game over your score is ${level-1}<br> Press any key to restart.`;
        restart();
    }
}

function restart() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}
function gameOver(){
    h3.innerHTML = `Congratulation you Score the max score ${level-1}<br>
    Press any key to restart!`;
    restart();
}