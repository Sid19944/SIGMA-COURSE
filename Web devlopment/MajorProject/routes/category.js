const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/WrapAsync.js");
const categoryController = require("../controller/categorys.js");

router.route("/mountain").get(wrapAsync(categoryController.mountain));

router.route("/mountain_city").get(wrapAsync(categoryController.mountain_city));

router.route("/city").get(wrapAsync(categoryController.city));

router.route("/beach").get(wrapAsync(categoryController.beach));

module.exports = router;
