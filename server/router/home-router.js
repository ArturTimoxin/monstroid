var express = require("express");
const random = require("../helpers/random");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./server-img/premade/"); //куда сохранять null - м.б. ошибка
  },
  filename: (req, file, callback) => {
    callback(null, random() + "_" + file.originalname); //под каким имененем null - м.б. ошибка
  },
});
const fileFilter = (req, file, callback) => {
  // приниммаем только файлы png, jpg
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    callback(null, true);
  } else {
    callback(new Error("File is not .png or .jpeg"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2, // файлы до 2MB
  },
  fileFilter: fileFilter,
});

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
    "http://localhost:3001/home/home-10.5.jpg",
    "http://localhost:3001/home/home-10.6.jpg",
    "http://localhost:3001/home/home-10.7.jpg",
    "http://localhost:3001/home/home-10.8.jpg",
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

let preMadeLayouts = [
  ["http://localhost:3001/premade/monstr-home-1.jpg", "Home Default"],
  ["http://localhost:3001/premade/monstr-home-2.jpg", "Home Business"],
  ["http://localhost:3001/premade/monstr-home-3.jpg", "Home Commercial"],
  ["http://localhost:3001/premade/monstr-home-4.jpg", "Home Creative"],
  ["http://localhost:3001/premade/monstr-home-5.jpg", "Home Modern"],
  ["http://localhost:3001/premade/monstr-home-6.jpg", "Home Portfolio"],
  ["http://localhost:3001/premade/monstr-home-7.jpg", "Home Default1"],
  ["http://localhost:3001/premade/monstr-home-8.jpg", "Home Default2"],
];

router.get("/", (req, res) => {
  res.json(homeData);
});

router.get("/premade", (req, res) => {
  res.json({ layouts: preMadeLayouts });
});

// upload.single() получим только 1 файл - midleware для анализа Content-type
router.post("/premade", upload.single("premadeImage"), (req, res) => {
  let endpointImage = "http://localhost:3001" + req.file.path.replace("server-img", "");
  preMadeLayouts.push([endpointImage, req.body.title]);
  res.json({ newPreMadeLayout: [endpointImage, req.body.title] });
});

module.exports = router; // типа export default
