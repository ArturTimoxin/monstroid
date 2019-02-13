var express = require("express");
const router = express.Router();

const homeData = {
  templatesImages: [
    "http://localhost:3001/home/home-00.jpg",
    "http://localhost:3001/home/home-01.jpg",
    "http://localhost:3001/home/home-02.jpg",
    "http://localhost:3001/home/home-03.jpg",
    "http://localhost:3001/home/home-04.jpg",
    "http://localhost:3001/home/home-05.jpg",
    "http://localhost:3001/home/home-06.jpg",
    "http://localhost:3001/home/home-07.jpg",
    "http://localhost:3001/home/home-08.jpg",
    "http://localhost:3001/home/home-09.jpg",
    "http://localhost:3001/home/home-10.3.jpg",
    "http://localhost:3001/home/home-10.4.jpg",
    "http://localhost:3001/home/home/home-10.5.jpg",
    "http://localhost:3001/home/home/home-10.6.jpg",
    "http://localhost:3001/home/home/home-10.7.jpg",
    "http://localhost:3001/home/home/home-10.8.jpg",
  ],

  preMadeLayouts: [
    ["http://localhost:3001/premade/monstr-home-1.jpg", "Home Default"],
    ["http://localhost:3001/premade/monstr-home-2.jpg", "Home Business"],
    ["http://localhost:3001/premade/monstr-home-3.jpg", "Home Commercial"],
    ["http://localhost:3001/premade/monstr-home-4.jpg", "Home Creative"],
    ["http://localhost:3001/premade/monstr-home-5.jpg", "Home Modern"],
    ["http://localhost:3001/premade/monstr-home-6.jpg", "Home Portfolio"],
    ["http://localhost:3001/premade/monstr-home-7.jpg", "Home Default1"],
    ["http://localhost:3001/premade/monstr-home-8.jpg", "Home Default2"],
  ],

  features: [
    "HTML5 + JS + CSS + SCSS",
    "Bootstrap 4+",
    "Blog Pages",
    "Shop Pages",
    "SEO Optimized",
    "Google Fonts Support",
    "Amazing Plugins",
    "Premium Resources",
  ],
};

router.get("/", (req, res) => {
  res.status(200).send(homeData);
});

module.exports = router; // типа export default
