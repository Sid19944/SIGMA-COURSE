// //              ( Event Bubbling )
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(event){
//     event.stopPropagation();            // To stop event bubbling
//     console.log("div was clicked");
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation();            // To stop event bubbling
//     console.log("ul was clicked");
// })

// for(l of li){
//     l.addEventListener("click",function(event){
//         event.stopPropagation();        // To stop event bubbling
//         console.log("li was clicked.");
//     });
// }

//---------------------------------------------------------------------
//              ( Activity )

let inp = document.querySelector("input");
let btn = document.querySelector(".addTask");
let body = document.querySelector("body");
let ul = document.createElement("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    // console.log(inp.value);
    li.innerText = inp.value;

    let del = document.createElement("button");
    del.classList.add("delbtn");
    del.innerText = "delete";
    
    li.appendChild(del);
    inp.value = ""
    ul.appendChild(li);
});
body.append(ul)

ul.addEventListener("click", function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
        console.log("deleted")
    } else {
        console.log("don't delete")
    }
});
