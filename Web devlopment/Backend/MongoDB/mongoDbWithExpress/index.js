const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const MyError = require("./ExpressError.js");

const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(methodOverride("_method"));

// connect the server with the database
main()
  .then((res) => {
    console.log("connection successful with mongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect("mongodb://127.0.0.1:27017/fackwhatsapp");   // ( async ERROR Handiling )
}

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

// new chat form
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});
// save the new chat in the DataBase
app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from, to, msg, created_at } = req.body;

    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });

    await newChat.save()

    res.redirect("/chats");
}));

function asyncWrap(fn) {
  return function(req,res,next){
    fn(req,res,next).catch(err=>next(err));
  }
}

// NEW - Show Route for fackwhatsapp DB ( async ERROR Handiling )
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    return next(new MyError(404, "Chat not found"));
  }
  res.render("edit.ejs", { chat });
}));

// getting the edit form
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { id, chat });
});
// update the message in DataBase
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let chat = await Chat.findByIdAndUpdate(id, { msg: msg });
  res.redirect("/chats");
});

//Delete the chat
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.deleteOne({ _id: id });
  res.redirect("/chats");
});

// --------------------------------------------------------------
// ( async ERROR Handiling )
const validationErrHandler = (err)=>{
  console.log("This is a Validation Error");
  err.message = "This is a Validation Error, Please follow Rules ";
  return err;
}

app.use((err, req, res, next)=>{
  console.log(err.name);
  if(err.name === "ValidationError"){
    validationErrHandler(err);
  }
  
  next(err);
})

app.use((err, req, res, next) => {
  let { status = 500, message = "Something is Wrong" } = err;
  res.status(status).send(message);
});

// ------------------------------------------------------------------

// connect the server to webpage
app.listen(8080, () => {
  console.log("post is connected with the server.");
});
