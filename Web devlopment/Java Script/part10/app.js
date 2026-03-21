//           ( This is for single button )
// let btn = document.querySelector("button");
// console.dir(btn);

// // btn.onclick = ()=>{
// //     alert("button was clicked");
// // }

// function sayHello() {
//     alert("hello!!");
// }
// btn.onclick = sayHello;

//          ( this is multi button function )

// let likeBtn = document.querySelectorAll("#like_btn");       //acces btns using ID
// for(like of likeBtn){
//     // like.onclick = sayLike;
//     like.onmouseenter = sayMouseIn;
//     like.addEventListener("click",sayLike);         // .addEventListener(event,callback)
//     like.addEventListener("click",sayBy);           // .addEventListener(event,callback)
//     like.addEventListener("mouseencter",Hover);     // .addEventListener(event,callback)
// }
// function sayLike() {
//     alert("like button clicked");
// }
// function sayBy() {
//     console.log("Bye");
// }
// function sayMouseIn() {
//     console.log("Mouse enter in button area");
// }
// function Hover() {
//     console.log("hover");
// }

//------------------------------------------------------------------------------
                    //( Activity )
// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     console.log("color updated!");

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// });


// function getRandomColor() {
//     let red = Math.floor(Math.random()*255);        // 0 to 255 random number
//     let green = Math.floor(Math.random()*255);      // 0 to 255 random number
//     let blue = Math.floor(Math.random()*255);       // 0 to 255 random number

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

                        // ( Activity END )
//--------------------------------------------------------------------------------
//                      ( mouse events)                                    

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("Para was clicked");
// })

// let box = document.querySelector("div");
// box.addEventListener("mouseenter",()=>{
//     console.log("mouse enter box");
// })
// // this function using the addEventListener("event", callback)
// box.addEventListener("click",function(){
//     console.log(this);
// })

// box.addEventListener("click",function(){
//     console.log(this.innerText = "New Inner thxt using this");
// })

// ---------------------------------------------------------------------------------

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

// ---------------------------------------------------------------------------

//          Keybiard Event

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log(event);
//     console.log(event.code);
//     console.log(event.key);
// })
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// })

//          keyboard event game

// let inp = document.querySelector("input")
// inp.addEventListener("keydown",function(event){
//     console.log("code = ",event.code);      // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     if(event.code == "ArrowUp"){
//         console.log("characrter moves forword");
//     } else if(event.code == "ArrowDown"){
//         console.log("character moves backword");
//     } else if(event.code == "ArrowLeft"){
//         console.log("character moves left");
//     } else if(event.code == "ArrowRight"){
//         console.log("character moves right");
//     }
// })



//                  ( FORM EVENT)

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();     // TO STAY ON THE PAGE
    
//     // let inp = document.querySelector("#user");       
//     // let pass = document.querySelector("#pass");
    
//     //          USING :   ( form.elements )
//     let inp = form.elements[0];
//     let pass = this.elements[1];

//     console.dir(pass);
//     console.dir(`password : ${pass.value}`)
//     console.dir(inp);
//     console.dir(`input : ${inp.value}`);
// })

// //                  USING: ( change event )
// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value : ",this.value);
// })

// //              USING : ( input event )
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value : ",this.value);
})

//              FORM Activity
// let text = document.querySelector("#text");
// let p = document.querySelector("p");

// text.addEventListener("input",function(){
//     console.log("final value",this.value);
//     p.innerText = this.value;
// });

