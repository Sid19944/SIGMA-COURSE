const express = require("express");
const app = express();

app.listen(8080, (req, res) => {
  console.log("Server in connected with port 8080");
});

// Creating Own Middleware

// app.use((req, res) => {
//   console.log("i am middleware");
// });

// Using the next

// app.use((req, res, next) => {
//   console.log("i am middleware");
//   return next();
// });
// app.use("/", (req, res, next) => {
//   console.log("I am 2nd middlewaer");
//   return next();
// });

// Creating Utility Middleware
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.time, req.path, req.host);
//   return next();
// });

// Path Specifiec Middleware
// app.use("/random", (req, res, next) => {
//   console.log("I am Middleware for /random");
//   return next();
// });
// app.use("/root", (req, res, next) => {
//   console.log("I am Middleware for /root");
//   return next();
// });

// Checking the query and then give the access of next() otherwise access denied
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED!!");
// });
// Middleware as function
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  res.send("ACCESS DENIED!!");
};
// send res only when /api middleware give the control
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/root", (req, res) => {
  res.send("root");
});

app.get("/random", (req, res) => {
  res.send("Random Route");
});

// 4040 page When url is Wrong When no path is specifiec
app.use((req, res) => {
  res.send(`Page Not Found!! Wrong URL`);
});
