const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connected with MongoDb");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = new mongoose.model("User", userSchema);

const addUser = async () => {
  let user = new User({
    username: "Sid",
    addresses: [
      {
        location: "00, devnagar",
        city: "Shaktifarm",
      },
      {
        location: "00, devnagar",
        city: "Shaktifarm",
      },
    ],
  });

  user.addresses.push(
    {
      location: "12, Phonics group of Institute",
      city: "Roorkee",
    },
    {
      location: "12, Phonics group of Institute",
      city: "Roorkee",
    }
  );

  // user.addresses.push({
  //   location: "12, Phonics group of Institute",
  //   city: "Haridwar",
  // });

  let result = await user.save();
  console.log(result);
};

addUser();

app.listen(8080, (req, res) => {
  console.log("Port 8080 is listings.");
});
