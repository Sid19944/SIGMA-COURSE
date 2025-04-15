// let catUrl = "https://catfact.ninja/fact";
// let dogUrl = "https://dog.ceo/api/breeds/image/random";

// async function getFacts(){
//     let p = document.querySelector("#catFact");
//     try {
//         let res = await axios.get(catUrl);
//         // console.log(res.data);

//         p.innerText = res.data.fact;
//     } catch(error) {
//        // console.log("Error found : ",error.message);
//         p.innerText = error.message;
//     }
// }

// let catBtn = document.querySelector("button");
// catBtn.addEventListener("click",()=>{
//     getFacts();
// })

//   ( FROM apna college)  ( Different Method)

let catUrl = "https://catfact.ninja/fact";
let dogUrl = "https://dog.ceo/api/breeds/image/random";

// For random cat facts : 
let catBtn = document.querySelector("#catBtn");
catBtn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    // console.log(fact);

    let p = document.querySelector("#catFact");
    p.innerText = fact;
})

async function getFacts() {
    try {
        let res = await axios.get(catUrl);
        return res.data.fact;
    } catch(err) {
        // console.log("ERROR - ",err);
        return err.message;
    }
}

// For random dog image
let dogBtn = document.querySelector("#dogBtn");
dogBtn.addEventListener("click", async ()=>{
    let link = await getDogImg();
    // console.log(link);

    let img = document.querySelector("#dogImg");
    img.setAttribute("src",link);

})

async function getDogImg(){
    try {
        let res = await axios.get(dogUrl);
        return res.data.message;
    } catch(er) {
        console.log(er.message);
    }
}


//      API CALL TO GET RANDOM JOKES :-

//      ( using additional headers )
const jokeUrl = "https://icanhazdadjoke.com/";
let jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", async ()=>{
    let joke = await getJokes();
    let p = document.querySelector("#jokeText");
    p.innerText = joke;
})

async function getJokes() {
    try {
        const config = { headers : { Accept : "application/json"}}; // USING HEADERS
        let res = await axios.get(jokeUrl,config);  // using the value of headers
        return res.data.joke;
    } catch(err) {
        console.log(err);
    }
}

//------------------------------------------------------------------

const universityApi = "http://universities.hipolabs.com/search?name=";
let uniBtn = document.querySelector("#universityBtn");

uniBtn.addEventListener("click",async()=>{
    let country = document.querySelector("#country").value;
    let colArr = await getList(country);
    show(colArr);
})

function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = '';

    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getList(country) {
    try {
        const config = {headers: {Accept : "application/json"}};
        let res = await axios.get(universityApi+country,config);
        return res.data;
    } catch(err){
        console.log(err);
    }
}

