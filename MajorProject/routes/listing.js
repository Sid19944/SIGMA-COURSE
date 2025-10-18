const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");

const validateListing = (req, res, next) => {
  // console.log(req.body);
  let { err } = listingSchema.validate(req.body);
  if (err) {
    let errMsg = err.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
  })
);

// New list form            // we write the route before show route because show route have :id so when we use /listings/new then the system think that new is also a id
router.get(
  "/new",
  wrapAsync(async (req, res) => {
    res.render("listings/new.ejs");
  })
);

// Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let list = await Listing.findById(id).populate("reviews");
    if (!list) {
      req.flash("error", "List you requested for does not exist");
      res.redirect("/listings");
    } else {
      res.render("listings/show.ejs", { list });
    }
  })
);

// Crete or Add list to the DataBase
router.post(
  "/",
  wrapAsync(async (req, res) => {
    let list = await new Listing(req.body); // we use "new keyword" to save to the db
    // console.log(list);
    await list.save();
    req.flash("success", "Listing Created Successfully");
    res.redirect("/listings");
  })
);

// Edit form
router.get(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let list = await Listing.findById(id);
    if (!list) {
      req.flash("error", "List you requested for does not exist");
      res.redirect("/listings");
    } else {
      res.render("listings/edit.ejs", { list });
    }
  })
);

// Update Route
router.put(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body });
    req.flash("success", "List update successfully");
    res.redirect(`/listings/${id}`);
  })
);

// Delete Route
router.delete(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "List Deleted Successfully");
    res.redirect(`/listings`);
  })
);

module.exports = router;
