const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isReviewOwner, validateReview } = require("../middleware.js");

const wrapAsync = require("../utils/WrapAsync.js");
const reviewController = require("../controller/reviews.js");

// add new review
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.addNewReview)
);

// delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewOwner,
  wrapAsync(reviewController.deleteReview)
);

module.exports = router;
