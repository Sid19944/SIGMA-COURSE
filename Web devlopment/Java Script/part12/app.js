//   Async functions :-

// async function greet(data){
//     // throw("there is an error");
//     return data;
// }

// greet("hello!").then((result)=>{
//     console.log(result);
//     return greet("hi!");
// })
// .then((result)=>{
//     console.log(result);
//     return greet("bye!");
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


//       ( await function )

// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.ceil(Math.random()*10);
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }


// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }

//  solve color change using the Promise & async & awiat function.

// let h1 = document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             console.log(`color change to : ${color}`);
//             resolve();
//         },delay);
//     })
// }

// async function getColor(){
//     await colorChange("red",1000);
//     await colorChange("green",1000);
//     await colorChange("yellowgreen",1000);
//     await colorChange("blue",1000);
//     await colorChange("purple",1000);
// }

// getColor();


// //  if the Promise return the reject error then how to solve with await keyword

// let h1 = document.querySelector("h1");
// function colorChange(color,delay){
//     return new Promise((resolve,reject)=>{
//         let num = Math.ceil(Math.random()*10);
//         if(num < 4 ){
//             reject("Promise rejected");
//         }
//         else {
//             setTimeout(()=>{
//                 h1.style.color = color;
//                 console.log(`color change to : ${color}`);
//                 resolve();
//             },delay);
//         }
//     })
// }

// async function getColor(){
//     try { 
//         await colorChange("yellow",1000)
//         await colorChange("red",1000);
//         await colorChange("green",1000);
//         await colorChange("yellowgreen",1000);
//         await colorChange("blue",1000);
//         await colorChange("purple",1000);
//     } catch(error) {
//         console.log("error caught");
//         console.log(error);
//     }

//     let n = 5;
//     console.log(n);
//     console.log(n+2);
// }

// getColor();




// --------------( JSON ) -------------------

// let jsonRes = `{"fact": "Approximately 1/3 of cat owners think their pets are able to read their minds,","Length":78}`;

// // JSON.parse(data) : to convert string json into JS object
// let validRes = JSON.parse(jsonRes);             // json to object
// console.log(validRes);

// let stu = {
//     name : "siddharth",
//     age : 20,
//     college : "Phonics Group of Institute"
// }

// let validJstu = JSON.stringify(stu);
// console.log(validJstu);



//-------------( Our first API call. )-----------------------------

let url = "https://catfact.ninja/fact";

// console.log("------RANDOM FACT'S ABOUT THE CAT'S------")
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     // console.log(data);
//     console.log("data 1 : ", data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data 2 : ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     // console.log(res);
    //     return res.json();
// })
// .then((data)=>{
//     console.log("data 3 : ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data 4 : ",data.fact);
//     return fetch(url);
// })
// .catch((err)=>{
//     console.log("Error : ",err);
// })


async function getFacts(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        console.log(data.fact);
    } catch(err) { 
        console.log("error found : ",err);
    }
    console.log("hi");
    
}

getFacts();