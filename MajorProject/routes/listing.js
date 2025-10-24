const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/WrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// New list form            // we write the route before show route because show route have :id so when we use /listings/new then the system think that new is also a id
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

router
  .route("/")
  .get(wrapAsync(listingController.index)) // index Route
  .post(
    // Crete/Add list to the DataBase
    isLoggedIn,
    // validateListing,
    upload.single("image"),
    wrapAsync(listingController.addList)
  );

// Category
router.route("/category").get(wrapAsync(listingController.category));


router
  .route("/:id")
  .get(wrapAsync(listingController.renderShowList)) // Show Route
  .put(
    // Update Route
    isLoggedIn,
    isOwner,
    // validateListing,
    upload.single("image"),
    wrapAsync(listingController.updateInDb)
  )
  .delete(
    // Delete Route
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.deleteList)
  );

// Edit form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
