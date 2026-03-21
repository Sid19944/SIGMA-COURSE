const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res)=>{
        console.log("connection successful with mongoDB.");
    }).catch((err)=>{
        console.log(err);
    })

async function main() {
    // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    await mongoose.connect("mongodb://127.0.0.1:27017/fackwhatsapp");
}

Chat.insertMany([
    {
        from : "neha",
        to : "priya",
        msg : "Send me your exam sheets",
        created_at : new Date(),
    },
    {
        from : "prem",
        to : "gaurav",
        msg : "hi",
        created_at : new Date(),
    },
    {
        from : "nitin",
        to : "sagar",
        msg : "hello",
        created_at : new Date(),
    },
    {
        from : "gaurav",
        to : "sid",
        msg : "come",
        created_at : new Date(),
    },
])