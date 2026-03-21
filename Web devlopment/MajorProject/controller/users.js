const User = require("../models/user.js");

module.exports.signUpFrom = async (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const regUser = await User.register(newUser, password);
    req.login(regUser, (err) => {
      if (err) {
        next(err);
      } else {
        req.flash("success", `Welcome to WonderLust ${username}`);
        res.redirect("/listings");
      }
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.loginForm = (req, res) => {
  res.render("users/login.ejs");
};

//login route
module.exports.login = async (req, res) => {
  let { username } = req.body;
  // console.log(username);
  req.flash("success", `Welcome back ${username}`);
  // console.log(res.locals.redirectUrl);
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

//logout route
module.exports.logout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "Logged You Out!!");
    res.redirect("/listings");
  });
};
