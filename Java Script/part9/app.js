// USING THE ( .getElementById )

// let ById = document.getElementById("mainImg");
// console.log(ById);
// console.dir(ById);


// USING THE ( .getElementsByClassName )

// let smallImgs = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImgs.length; i++){
//     smallImgs[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }


// USING THE ( .getElementsBtTagName )

// let ByTag = document.getElementsByTagName("p");
// console.log(ByTag);
// console.dir(ByTag);


// USING THE ( .querySelector )

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector(".oldImg"));
// console.log(document.querySelector(".box a"));


//  USING PROPERTIES & METHODS USING QUERY SELECTOR.    ( .innerText, .innerHTML, .textContent )

// let para = document.querySelector("p");
// console.log(para);
// para.innerText = `The para is changed.`;
// para.innerHTML = `<b>${para.innerText}</b>`;
// console.log(para.textContent = `${para.innerText}`);

// USING THE Manipulating Attributes
//          ( .getAttribute )
// let img = document.querySelector("#mainImg");
// console.log(img);
// console.log(img.getAttribute(`id`));        // get the value of id
// img.setAttribute("id","firstImg");          // set the new value of id


//// Style Maniputating 
//      ( .style )
// let boxAnckor = document.querySelectorAll(`.box a`);
// console.log(boxAnckor);
// for(anckor of boxAnckor){       // for loop for each element
//     anckor.style.color = "green";
// }

//      ( .classList )
// let box = document.querySelector(".box");
// console.log(box.classList);
// box.classList.add("green");         // .classList.add() to add a class
// box.classList.remove("green");     // .classList.remove() to remove the class
// console.log(box.classList.contains("green"));    // .classList.contains() true if class exist, flase if class not exist
// box.classList.toggle("green");      // .classList.toggle() use if the class is exist than remove the class if not exist than add the class


// // NAVIGATION
// let ul = document.querySelector(".box ul");
// console.log(ul.parentElement);      // go to parent element

// console.log(ul.children);           // go to children element

// console.log(ul.childElementCount);  // to check how much child

// console.log(ul.previousElementSibling); // go to previous element of that sibling

// console.log(ul.nextElementSibling);     // go to next element of that sibling

// console.log(ul.previousElementSibling.style.color = "Red"); // to operate some method

// // ADDING ELEMENTS
// //      ( createElement("el") )     // to creat new element in the document
// let box = document.querySelector(".box");

// let btn = document.createElement("button");     // create new element
// btn.innerText = "Click me";
// btn.style.fontSize = "20px";            // Add style
// btn.style.borderRadius = "10px";        // Add style
// btn.style.backgroundColor = "red";      // Add style
// btn.style.color = "yellow";

// // ( .appendChild(el) )              // Add element into the document screen
// box.appendChild(btn);               // Add element as child of box

// let newP = document.createElement("p");     // create new element
// newP.innerText = "Hi, i am new appendChild para";
// newP.innerHTML = `<u>${newP.innerText}</u>`;
// box.appendChild(newP);              // Add element as child of box

// // (.append(el) )
// newP.append(" this is a para");

// // ( .prepend(el) )
// let newP2 = document.createElement("p");     // create new element
// newP2.innerText = "Hi, i am new prepend para";
// newP2.innerHTML = `<u>${newP2.innerText}</u>`;
// box.prepend(newP2);

// // ( .insertAdjacentElement )
// let para = document.querySelector("p");

// let btn2 = document.createElement("button");
// btn2.innerText = "Click me";
// para.insertAdjacentElement("beforebegin",btn2);     // before the para start

// let btn3 = document.createElement("button");
// btn3.innerText = "Click me";
// para.insertAdjacentElement("afterbegin",btn3)       // after the para start

// let btn4 = document.createElement("button");
// btn4.innerText = "Click me";
// para.insertAdjacentElement("beforeend",btn4);       // before the para end

// let btn5 = document.createElement("button");
// btn5.innerText = "Click me";
// para.insertAdjacentElement("afterend",btn5);        // after the para end

// Practice Question    : Add the following elements to the container using only JavaScript and the DOM methods.

/*  1) a<p> with red text that says "Hey I'm red!"
    2) an<h3> with blue text that says "I'm a blue h3!"
    3) a<div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says "I'm in a div"
        a <p> thtat says "ME TOO!"
*/

let body = document.querySelector("body");
let para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.style.color = "red";
para.classList.add("red");
body.appendChild(para);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";
h3.classList.add("blue");
body.appendChild(h3);

let div = document.createElement("div");
div.classList.add("box");
body.appendChild(div);
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
let h1 = document.createElement("h1");
let pInDiv = document.createElement("p");
h1.innerText = "I'm in a div";
pInDiv.innerText = "ME TOO!";
div.appendChild(h1);
div.appendChild(pInDiv);