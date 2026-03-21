const mongoose = require("mongoose");

main().then(()=>{
    console.log("connection success");
})
.catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// const userSchema = new mongoose.Schema({                // Create Schema for the collection
//     name : String,
//     email  : String,
//     age : Number,
// });

// const User = mongoose.model("User", userSchema);        // Create collection in DataBase

// const user1 = new User({
//     name : "Ram",
//     email : "ram@gmail.com",
//     age : 32,
// })

// const user2 = new User({
//     name : "Sham",
//     email : "sham@gmail.com",
//     age : 34,
// })

// user1.save();
// user2.save().then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))

// -------------------------------------------------------------------

                // INSERT MANY in DataBase
// User.insertMany([
//     {name : "Tony", email : "tony@gmail.com", age : 47},
//     {name : "Peter", email : "peter@gmail.com", age : 20},
//     {name : "Bruc", email : "bruc@gmail.com", age : 51},
// ]).then((res)=>{
//     console.log(res);
// })

// ----------------------------------------------------------------------------
            //  FIND IN DATABASE
// User.find({}).then((res)=>{              //  use to find all document from the collection
//     console.log(res);
// }).catch(err=>console.log(err));

// User.find({age : {$lt : 30}}).then((res)=>{      // use to find specified document from the collection
//     console.log(res);
// }).catch(err=>console.log(err));

// User.findById('68c7b9d8826d342fb7ec34ac').then((res)=>{     // use to find document using the id from the collection
//     console.log(res);
// })

// -----------------------------------------------------------------------------------

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
})
const User = new mongoose.model("User", userSchema);

const user1 = new User({
    name : "Sid",
    email : "sid@gmail.com",
    age : 21,
})
// user1.save().then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.insertMany([
//     {name : "Prem", email : "prem@gmail.com", ege : 20},
//     {name : "Gaurab", email : "gaurav@gmail.com", age : 19},
//     {name : "Nitin", email : "nitin@gmail.com", age : 22},
// ]).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.find({age : {$gt :19}}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.findOne({age : {$gt : 19}}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.findById('68c7e93d9e720e4eb1d30ad9').then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.updateOne({_id : '68c7e93d9e720e4eb1d30ad8'}, {age : 19}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));

// User.insertMany([
//     {name : "Chotu", email : "chotu@gmail.com", age : 17},
//     {name : "Om", email : "om@gmail.com", age : 16},
//     {name : "Sandeep", email : "sandeep@gmail.com", age : 14},
// ]).then(res=>console.log(res));


// User.updateMany({age : {$lt : 18}}, {email : "Not Available"}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));


// User.findByIdAndUpdate('68c7ecea1129fa4e467aad2c', {email : "Not Available By Id"}, {new : true}).then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err));





// User.deleteOne({age : {$lt : 18}}).then(res=>console.log(res));

// User.deleteMany({age : {$gt : 18}}).then(res=>console.log(res));

User.findByIdAndDelete('68c8f1de88276f9af6502ce4').then(res=>console.log(res));

// User.find({}).then(res=>console.log(res));