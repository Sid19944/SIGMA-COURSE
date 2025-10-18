const express = require("express");
const app = express();
const MyError = require("./OwnError.js");

app.listen(8080, (req, res) => {
  console.log("Server is listing port 8080");
});

// Middleware as function
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  throw new MyError(401, "Access Denied");
};
// send res only when /api middleware give the control
app.get("/api", checkToken, (req, res) => {
  console.log("----API ACCESS APPROVED-----");
  res.send("Data");
});

app.use("/api", (err, req, res, next) => {
  let { status, message } = err;
  console.log("-----API Access Denied");
  res.status(status).send(message);
});

app.get("/err", (req, res) => {
  a = e;
  console.log("hi");
});


//    Activity
// ( Create an admin route & send an error with a 403 status code. )
app.get("/admin", (req, res) => {
  throw new MyError(403, "Access is Forbiden");
});

// default Error middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Somthing is Wrong!!" } = err;
  console.log("-----Default ERROR-----");
  res.status(status).send(message);
});

// Owr default Error Handler Middleware
// app.use((err, req, res, next) => {
//   console.log("------ERROR-----");
//   res.send(err);
// });
