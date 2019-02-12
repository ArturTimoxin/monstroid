var express = require("express");
const router = express.Router();

const features = [
  "HTML5 + JS + CSS + SCSS",
  "Bootstrap 4+",
  "Blog Pages",
  "Shop Pages",
  "SEO Optimized",
  "Google Fonts Support",
  "Amazing Plugins",
  "Premium Resources",
];

router.use(express.static("../src/assets/"));

router.get("/features", (req, res) => {
  res.status(200).send(features);
});

module.exports = router;
