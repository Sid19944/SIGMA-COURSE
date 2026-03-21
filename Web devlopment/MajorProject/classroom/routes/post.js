const express = require("express");
const router = express.Router();

// for posts
router.get("/", (req, res) => {
  res.send("Get for posts");
});

router.get("/:id", (req, res) => {
  res.send("Get for show posts using id");
});

router.post("/", (req, res) => {
  res.send("Post for posts");
});

router.delete("/:id", (req, res) => {
  res.send("Delete for posts using id");
});

module.exports = router;
