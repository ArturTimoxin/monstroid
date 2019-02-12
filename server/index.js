var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3001;
var homeRouter = require("./router/home-router.js");

app.use(bodyParser.json()); // bodyParser ???
app.use(bodyParser.urlencoded({ extended: true })); /// undeclorated ???

// что за параметры в header ???
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
  next();
});
app.use("/home", homeRouter);
app.use("/*", function(req, res) {
  res.status(404).send({ error: true, message: "Not found such route. please read API documentation" });
});

app.listen(port, function() {
  console.log(`Server running on port ${port}.`);
});
