const express = require("express");
const app = express();
const userRoute = require("./routes/user.js");
const postRoute = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// const cookieParser = require("cookie-parser");

// app.use(cookieParser("hide"));

// app.get("/getcookies", (req, res) => {
//   res.cookie("username", "sid", { signed: true });
//   res.cookie("password", "sid@1234", { signed: true });
//   res.send("I am cookie");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   console.log(req.cookies);
//   res.send(`Hi ${name}`);
// });

// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   let cookie = req.cookies;
//   res.send(`Hi i am root ${cookie.username}`);
// });

// app.use("/users", userRoute);

// app.use("/posts", postRoute);

const sessionOption = {
  secret: "secretCone",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOption)); // using the session
app.use(flash()); // using the connect-flash

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "User not registerd");
  } else {
    req.flash("success", "user register successfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You request session is ${req.session.count}`);
// });

app.get("/test", (req, res) => {
  res.send("test Successful");
});

app.listen(3000, () => {
  console.log("Server is live with port 3000");
});
