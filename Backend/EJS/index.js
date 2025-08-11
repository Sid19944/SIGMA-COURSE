const express = require("express");
const app = express();
const path = require("path");

const port  = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname,"public/js")))


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));     // using this we can access the views folder globaley



app.get("/", (req,res)=>{
    res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    const data = instaData[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs", { data} );
    }else {
        res.render("error.ejs")
    }
    
})
app.get("/help", (req,res)=>{
    res.render("help.ejs");
})
app.get("/rollDice",(req,res)=>{
    let diceVal = Math.ceil(Math.random()*6);
    res.render("rollDice.ejs",{diceVal});
})

app.listen(port, ()=>{
    console.log("Port listening 8080");
})
