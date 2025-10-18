const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then((res) => {
    console.log("Connected with MongoDb");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  name: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "QUser",
  },
});

const QUser = mongoose.model("QUser", userSchema);
const Post = mongoose.model("Post", postSchema);

const addPost = async () => {
  let post1 = new Post({
    content: "hello",
    likes: 10,
  });

  let post2 = new Post({
    content: "bye",
    likes: 10,
  });

  let user = await QUser.findOne({ name: "Prem" });

  post2.user = user;

  let res = await post1.save();
  //   let res = await post2.save();
  console.log(res);
};
addPost();

const findPost = async () => {
  let result = await Post.find({}).populate("user");
  console.log(result);
};
// findPost();

// const addUser = async () => {
//     let res = await QUser.insertMany([
//       {
//         name: "Sid",
//         email: "sid@gmail.com",
//       },
//       { name: "Prem", email: "prem@gmail.com" },
//       {
//         name: "Gaurav",
//         email: "gaurav@gmail.com",
//       },
//     ]);
//   console.log(res);
// };

// addUser();
