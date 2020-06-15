const express = require("express");
const router = express.Router();

const { getQuotes } = require("../controllers/getQuotes");

router.get("/", (req, res) => {
  res.json(getQuotes());
});

router.get("/:id", (req, res) => {
  res.json(getQuotes(req.params.id));
});

module.exports = router;
