const Listing = require("../models/listing.js");

// index Route
module.exports.index = async (req, res) => {
  let allListings = await Listing.find();
  res.render("listings/index.ejs", { allListings });
};

// New list form
module.exports.renderNewForm = async (req, res) => {
  res.render("listings/new.ejs");
};

// Show Route
module.exports.renderShowList = async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "owner" } })
    .populate("owner");

  if (!list) {
    req.flash("error", "List you requested for does not exist");
    res.redirect("/listings");
  } else {
    // console.log(list);
    res.render("listings/show.ejs", { list });
  }
};

// Crete/Add list to the DataBase
module.exports.addList = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;

  let list = await new Listing(req.body); // we use "new keyword" to save to the db
  list.owner = req.user._id;
  list.image = { url, filename };
  await list.save();
  req.flash("success", "Listing Created Successfully");
  res.redirect("/listings");
};

// Edit form
module.exports.renderEditForm = async (req, res, next) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  if (!list) {
    req.flash("error", "List you requested for does not exist");
    res.redirect("/listings");
  }
  let currImg = list.image.url;
  currImg = currImg.replace("/upload", "/upload/h_150,w_200,e_blur/");
  res.render("listings/edit.ejs", { list, currImg });
};

// Update Route
module.exports.updateInDb = async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findByIdAndUpdate(id, { ...req.body });

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    list.image = { url, filename };
    await list.save();
  }
  req.flash("success", "List update successfully");
  res.redirect(`/listings/${id}`);
};

//delete Route
module.exports.deleteList = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "List Deleted Successfully");
  res.redirect(`/listings`);
};


// Category
// module.exports.category = async(req,res)=>{
//   let category = 
//   let list = await Listing.find
// }