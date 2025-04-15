// Q 1. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";
let body = document.querySelector("body");

let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
body.append(inp);
body.append(btn);

// Q 2. Add following attributed to the element.
/* - Change placeholder value of input to "username"
   - Change the id of button to "btn".
*/
inp.placeholder = "username";       // imp.setAttribute("placeholder","username");
btn.setAttribute('id','btn');

// Q 3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to while
console.log(document.querySelector("#btn"));
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Q 4. Create an h1 element on the page and set its text to "DOM Practie" underlined. Change its color to purple.
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
body.append(h1);

// Q 5. Crate a p tag on the page and set its test to "Anpa College Delta Practice", where Delta is bold.
let p = document.createElement("p");
p.innerHTML = `Apna College <b>Delata</b> Practice`;
body.append(p);