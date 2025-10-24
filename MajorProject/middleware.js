const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const {listingSchema, reviewSchema} = require("./schema.js");

// if condition check that id the User is SignUp before the Login
module.exports.isLoggedIn = (req, res, next) => {
  // console.log(req.originalUrl);
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl; // assise the last path to req.session.redirectUrl for saveRedirectURl middleware
    req.flash("error", "User must be Logged In");
    return res.redirect("/login");
  }
  next();
};

// if condition check that if there is some page that access without the user login, then give that path he was trying to access befor the login and redirect to that path this middle take that path from the isLoggedIn middleware after if condition
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

// if condition check that if the list owner is not login, then the curr user can't access the list controls
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  if (!list.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "Yur don't have permission to edit");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// if condition check that if the review owner is not login, then the curr user con't access the review controls
module.exports.isReviewOwner = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are Not the Owner of the Review!!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};


module.exports.validateListing = (req, res, next) => {
  // console.log(req.body);
  let { err } = listingSchema.validate(req.body);
  if (err) {
    let errMsg = err.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { err } = reviewSchema.validate(req.body);

  if (err) {
    let errMsg = err.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};