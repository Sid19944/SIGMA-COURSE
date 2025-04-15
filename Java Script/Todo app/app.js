let todo = [];
let req = prompt("Please enter your request :");
while (true) {
    if (req == "quite"){
        console.log("Quitting the app");
        break;
    }
    if (req == "list") {
        console.log("----------------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i+1, todo[i]);
        }
        console.log("----------------------");
    } else if (req == "add"){
        let task = prompt("Please enter you want to add");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete"){
        let idx = prompt("Enter the index of task");
        idx-=1;
        todo.splice(idx, 1);
        console.log("task deleted");
    }  else {
        console.log("Wrong request");
    }
    
    req = prompt("Please enter your request :");
    


}