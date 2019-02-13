var express = require("express");
var bodyParser = require("body-parser"); // midleware для перевода данных из json
var app = express();
var port = 3001;
var homeRouter = require("./router/home-router.js");
const path = require("path");

app.use(bodyParser.json()); // подлючаем midleware
/* 
   Возвращает промежуточное программное обеспечение, 
   которое анализирует только тела с урлен-кодом и просматривает только те запросы, 
   в которых заголовок Content-Type соответствует параметру type. 
   Новый req.body(), содержащий проанализированные данные, 
   заполняется в объекте запроса после промежуточного программного обеспечения (т.е. req.body). 
   Этот объект будет содержать пары ключ-значение.
*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // c какой url можно принимать запросы
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PATCH");
  next(); // переход к след. midleware
});

// var homeImgPath = path.basename("../server-img");
// app.use(express.static(homeImgPath)); //router.use(express.static("../src/assets/"));
app.use(express.static(path.join(__dirname, "server-img")));

app.use("/home", homeRouter);
app.use("/*", function(req, res) {
  res.status(404).send({ error: true, message: "Not found such route. please read API documentation" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
