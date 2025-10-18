const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res)=>{
        console.log("connection successful with mongoDB.");
    }).catch((err)=>{
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fackwhatsapp");
}

console.log(Chat);
let chat1 = new Chat({
        from : "neha",
        to : "priya",
        msg : "Send me your exam sheets",
        created_at : new Date(),
    })
chat1.save().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        });

// Chat.insertMany([
//     {
//         from : "neha",
//         to : "priya",
//         msg : "Send me your exam sheets",
//         created_at : new Date(),
//     },
//     {
//         from : "prem",
//         to : "gaurav",
//         msg : "hi",
//         created_at : new Date(),
//     },
//     {
//         from : "nitin",
//         to : "sagar",
//         msg : "hello",
//         created_at : new Date(),
//     },
//     {
//         from : "gaurav",
//         to : "sid",
//         msg : "come",
//         created_at : new Date(),
//     },
// ])