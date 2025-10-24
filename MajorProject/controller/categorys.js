const Listing = require("../models/listing.js");

module.exports.mountain = async (req, res) => {
  let allListings = await Listing.find({ category: "Mountain" });
  if (allListings.length > 0) {
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `Nothing on this Category`);
    res.redirect("/listings");
  }
};

module.exports.mountain_city = async (req, res) => {
  let allListings = await Listing.find({ category: "Mountain City" });
  if (allListings.length > 0) {
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `Nothing on this Category`);
    res.redirect("/listings");
  }
};
module.exports.city = async (req, res) => {
  let allListings = await Listing.find({ category: "City" });
  if (allListings.length > 0) {
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `Nothing on this Category`);
    res.redirect("/listings");
  }
};
module.exports.beach = async (req, res) => {
  let allListings = await Listing.find({ category: "Beach" });
  if (allListings.length > 0) {
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `Nothing on this Category`);
    res.redirect("/listings");
  }
};
