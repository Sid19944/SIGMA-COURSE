const express = require("express");
const app  = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(methodOverride("_method"));


// connect the server with the database
main()
    .then((res)=>{
        console.log("connection successful with mongoDB.");
    }).catch((err)=>{
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fackwhatsapp");
}


//index route
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
})

// new chat form
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
})
// save the new chat in the DataBase
app.post("/chats", (req,res)=>{
    let data = req.body;

    let newChat = new Chat({
        from : data.from,
        to : data.to,
        msg : data.msg,
        created_at : new Date(),
    })

    newChat.save().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });

        res.redirect("/chats");
})



// getting the edit form
app.get("/chats/:id/edit", async (req,res)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{id, chat});
})
// update the message in DataBase
app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    let chat = await Chat.findByIdAndUpdate(id, {msg : msg});
    res.redirect("/chats");
})


//Delete the chat
app.delete("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    await Chat.deleteOne({_id : id});
    res.redirect("/chats");
})


// connect the server to webpage
app.listen(8080, ()=>{
    console.log("post is connected with the server.");
})