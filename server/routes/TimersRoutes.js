const express = require("express");
const router = express.Router();

const { getTimers } = require("../controllers/getTimers");

router.get("/sessionstimer/1pojd", (req, res) => {
  res.json(getTimers(req.params.id));
});

router.get("/:id", (req, res) => {
  res.json(getTimers(req.params.id));
});

module.exports = router;
