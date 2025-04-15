const url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector("#uniBtn");
btn.addEventListener("click", async()=>{
    let uniArr = await getList();
    // show(uniArr);
})

function show(uniArr) {
    for(uni of uniArr){
        console.log(uni);
    }
}

async function getList(){
    try {
        const config = {headers:{Accept: "application/html"}};
        let res = await axios.get(url,config);
        console.log(res);
    } catch(err){
        // return err;
    }
}