// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

//------------------------------------------------------------------
//          ( CALLBACK HELL )

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if (nextChangeColor) {
//             nextChangeColor();
//         }
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("yellowgreen",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 changeColor("purple",1000);
//             })
//         })
//     });
// })


// function saveToDb(data,success,failure) {
//     let internetSpeed = Math.ceil(Math.random()*10);

//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Siddharth",()=>{
//     console.log("Success : Your data is saved.");
//     saveToDb("Hello",()=>{
//         console.log("Success : Your data is saved.");
//     }, ()=>{
//         console.log("Failure : Week connection");
//     })
// }, ()=>{
//     console.log("Failure : Week connection")
// })



//   ( Promises  : to resole the callback hell )

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.ceil(Math.random()*10);
//         if(internetSpeed > 4) {
//             resolve("Success : Data is saved.");
//         } else {
//             reject("Failure : week connection.");
//         }
//     })
// }

// saveToDb("sid");

// ( .then() and .catch() )

// saveToDb("apna college.").then((result)=>{
//     console.log("data 1 was saved");
//     console.log(result);
//     return saveToDb("sid");
// })
// .then((result)=>{
//     console.log("data 2 was saved");
//     console.log(result);
//     return saveToDb("hi");
// })
// .then((result)=>{
//     console.log("data 3 was saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log(error);
// });


// // solve callback hell using the promise object

let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve(`color change to : "${color}"`);
        },delay);
    })
}

changeColor("red",1000).then((result)=>{
    console.log(result);
    return changeColor("green",1000);
})
.then((result)=>{
    console.log(result);
    return changeColor("yellowgreen",5000);
})
.then((result)=>{
    console.log(result);
    return changeColor("purple",1000);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
