const student = {
    name : "Siddharth",
    age : 20,
    marks : 79.9,
    city : "Shaktifarm"
};

let Home = {
    latitude: 29.0151518,
    langitude: 79.6410979
};

let item = {
    price: 99,
    discount: 10,
    color: ["Blue","Green"]
};

const post = {
    userName : "@sid1994",
    content : "Trip",
    likes : 1000,
    reposts : 5,
    tags : ["@prem","@Sagar","@Saurav"],
};

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    username : "Sid"
};

// Nesting

// const classInfo = {
//     Sid : {
//         marks : 90,
//         city : "Roorkee"
//     },
//     Prem : {
//         marks : 89,
//         city : "Tanak pur"
//     },
//     Sagar : {
//         marks : 88,
//         city : "Deharadun"
//     }
// }

// Array of Objects
const classInfo = [
    {
        name : "Sid",
        marks : 90,
        city : "Roorkee"
    },
    {
        name : "Sagar",
        marks : 89,
        city : "Deharadun"
    },
    {
        name : "Nitin",
        marks : 88,
        city : "Bheemtaal"
    }
];

// Random Number OTP Generate
let ran = Math.random()*10;
let ran2 = Math.random()*10;
let ran3 = Math.random()*10;
let ran4 = Math.random()*10;
let num1 = Math.floor(ran);
let num2 = Math.floor(ran2);
let num3 = Math.floor(ran3);
let num4 = Math.floor(ran4);
let otp = `${num1}${num2}${num3}${num4}`;
console.log(otp);
// Generate 0 to 9
console.log(Math.floor(Math.random()*10));
// Generate 1 to 100
console.log(Math.ceil(Math.random()*100));
// Generate 1 to 5
console.log(Math.ceil(Math.random()*5));