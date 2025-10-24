const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/WrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/users.js");

router
  .route("/signup")
  .get(userController.signUpFrom) // sign up form
  .post(wrapAsync(userController.signUp)); // Sign up route

router
  .route("/login")
  .get(userController.loginForm) // login form
  .post(
    //login route
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

//logout route
router.get("/logout", wrapAsync(userController.logout));

module.exports = router;
