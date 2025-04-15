// forEach method
let arr = [1,2,3,4,5];
// Nameless function
let print = function(el) {
    console.log(el);
};
arr.forEach(print);

// Using arrow function
let printA = (el)=>{
    console.log(el);
}
arr.forEach(printA);

// Another method
arr.forEach(function(el){
    console.log(el);
})

// Using array object
let students = [
    {
        name : "Sid",
        age : 20,
        marks : 98
    },
    {
        name : "Prem",
        age : 20,
        marks : 96
    },
    {
        name : "Saurav",
        age : 20,
        marks : 95
    }
];
let printO = (stu)=>{
    console.log(stu);
}
students.forEach(printO);

// map function
let num = [1,2,3,4,5];
let double = (el)=>{
    return el*2;
};
console.log(num.map(double));       //Using the function


let gpa = students.map((el)=>{      // Using the function
    return el.marks / 10;
})
console.log(gpa);

// filter function : 
let nums = [1,2,3,45,54,54,6,23,35,2,3,5,67,4,568,234,23,5,68,];
let oddNums = nums.filter((el)=>{
    return el%2 != 0;
});
let evenNums = nums.filter((el)=>{
    return el%2 == 0;
});

console.log(
    `total numbers : ${nums}
    odd Numbers : ${oddNums}
    even Numbers : ${evenNums}`);

// let oddNum = (el)=>{        // Using the function
//     return el%2 != 0;
// }
// console.log(nums.filter(oddNum));


// every function           Work like &&
let arrEvery = [2,4,6];
console.log(arrEvery.every((el)=>{
    return el%2==0})
);
let newEvery = [1,23,5,4,6];
console.log(newEvery.every((el)=>el%2!=0));

// some function            Work like ||
let arrSome = [1,2,3,4,5];
console.log(arrSome.some((el)=>el%2==0));
let newSome = [1,3,5];
console.log(newSome.some((el)=>el%2==0));


// reduce function

let arrReduce = [1,2,3,4];
let resu = arrReduce.reduce((res,el)=>{
    console.log(res);
    return res+el;}
);

console.log(resu);

// using reduce function to find max number for the array.
let arrNum = [1,23,42,2,5,34,3434,232,55,3135,];
let maxNum = arrNum.reduce((max,el)=>{
    if(el >= max ){
        return el;
    } else {
        return max;
    }
})
console.log(maxNum);

// Practice Qs.1 Check if all numbers in our array are multiples of 10 or not.
let arrPr11 = [10,20,30,40];
let arrPr12 = [12,30,53,30];
console.log(arrPr11.every((el)=>(el%10==0)));
console.log(arrPr12.every((el)=>(el%10==0)));

// Practice Qs.2 Create a function to find the min number in an array
let arrPr21 = [123,123,2,4,24,5,3,1,,53,5,3653,3,434];
console.log(arrPr21.reduce((min,el)=>{
    if(el <= min){
        return el;
    } else {
        return min;
    }
}));


// Defalut Parameters
let ans = (a,b,c = 0)=>(a+b+c);
console.log(ans(1,2));

// spread function      : using spred every el pass like individual value
// spread function with array
let arrSpread = [122,232,1323,234,51,301,23,19];
console.log(...arrSpread);
console.log(Math.min(...arrSpread));     // Math.min use to find the minimum value of given numbers.
console.log(Math.max(...arrSpread));     // Math.max use to find the maximun value of given numbers.

let str = "Siddharth";
console.log(...str);

let char = [..."Sid"];
console.log(char);

// spread with object and string
let obj1 =  {
    mail : "sidsarkar2112@gmial.com",
    password : "sid2112",
};
let objCopy = {...obj1, id : 123};
console.log(objCopy);

let arr1 = {...arrSpread};
console.log(arr1);

let str1 = {..."Siddharth"};
console.log(str1);


// rest functio     // rest takes multiple arguments the pass in an array
function f(...arg){
    console.log(arg);
}
f(obj1,arrSpread);
f(arrPr11,arrPr12);


function sumArr(...argu){
    return argu.reduce((sum,el) => sum+el);
}
console.log(sumArr(1,2,3,4,5));

function minArr(...argu){
    return argu.reduce((min,el)=>{
        if(el<min){
            return el;
        } else {
            return min;
        }
    })
}
console.log(minArr(1,2,3,4,-2,45,12));

// Destructuring        with array
let names = ["tony","steve","peter","bruce"];
let [winner, second, ...others] = names;
console.log(winner, second, others);

// Destructuring    with onject
let objDes = {
    name : "Siddharth",
    age : 20,
    userName : "sid@123",
    password : "sid@123412",
};
let {name, userName} = objDes;
let {userName : user, age} = objDes;

console.log(name,userName,user,age);