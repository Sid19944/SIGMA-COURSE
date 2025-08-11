let arr = [1,2,3];


// FACTORY FUNCTION
function PersonMaker(name, age){
    const person = {
        name : name,
        age : age,
        talk() {
            console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
        },
    };
    return person;
}
// let p1 = PersonMaker("Ram",19);
// let p2 = PersonMaker("Sita",20)



// Constructor : dose't return anything & start with Capital letter
// function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// // Creating an Prototype of the Constructor
// Person.prototype.talk = function(){
//     console.log(`Hi, My name is ${this.name}`);
// }

// let p1 = new Person("Ram",7000);
// let p2 = new Person("Sita",7000);



// // Create "class funciton" that work as the "constructor and the as the new operator"
// class Person{
//     constructor(name,age){      // Constructor
//         this.name = name;
//         this.age = age;
//     }
//     talk() {    // Prototype of the constructor
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }

// // Creating obeject as same as the new operator and the constructor
// let p3 = new Person("Krishna",5000);
// let p4 = new Person("Radha",4500);




//  Inheritance
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}



//  Inheritance
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{
    constructor(name,age){
        super(name,age);
    }
    bark(){
        console.log("Woof!!");
    }
}
class Cat extends Animal {
    constructor(name,age){
        super(name,age);
    }
    meow(){
        console.log("meow!!");
    }
}