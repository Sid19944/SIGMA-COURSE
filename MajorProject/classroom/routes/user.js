const express = require("express");
const router = express.Router();

// for users
router.get("/", (req, res) => {
  res.send("Get for users");
});

router.get("/:id", (req, res) => {
  res.send("Get for show users using id");
});

router.post("/", (req, res) => {
  res.send("Post for users");
});

router.delete("/:id", (req, res) => {
  res.send("Delete for users using id");
});

module.exports = router;
