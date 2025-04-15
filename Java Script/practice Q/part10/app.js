// Q.1 Create a button on the page using JavaScript. Add an event listener to the button that changes the button's color to green when it is clicked?

let btn = document.createElement("button");
let body = document.querySelector("body");

body.append(btn);
btn.innerText = "Click me";
btn.addEventListener("click",function(){
    this.style.backgroundColor = "green";
})

// Q.2 Create an input element on the apge with a placeholder "enter your name" and an H2 heading on the page inside HTML

let inp = document.createElement("input");
body.append(inp);
inp.placeholder = "Enter your name";

inp.addEventListener("input",function(){
    console.log(this.value);
    let heading = document.querySelector("#Q2Ans");
    heading.innerText = this.value;
})

// Q. mouseout Event

let box = document.querySelector("#box");
box.style.border = "1px solid black";
box.style.height = "200px";
box.addEventListener("mouseout",function(){
    console.log("mouse out event triger.")
})

// keypress Event
let inpKeypress = document.querySelector("#input");
inpKeypress.addEventListener("keypress",function(){
    console.log("keypress Event");
})

// document.addEventListener("scroll",function(){       // go to youtube
//     console.log("scrooled");
// })