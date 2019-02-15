var express = require("express");
var bodyParser = require("body-parser"); // midleware для перевода данных из json
var cors = require("cors");
var app = express();

var port = 3001;
var homeRouter = require("./router/home-router.js");
const path = require("path");

app.use(bodyParser.json({ limit: "50mb" })); // подлючаем midleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
/* 
   Возвращает промежуточное программное обеспечение, 
   которое анализирует только тела с урлен-кодом и просматривает только те запросы, 
   в которых заголовок Content-Type соответствует параметру type. 
   Новый req.body(), содержащий проанализированные данные, 
   заполняется в объекте запроса после промежуточного программного обеспечения (т.е. req.body). 
   Этот объект будет содержать пары ключ-значение.
*/

var corsOptions = {
  origin: "*", //white list
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

var homeImgPath = path.basename("../server-img");
app.use(express.static(homeImgPath));

app.use("/home", homeRouter);
app.use("/*", function(req, res) {
  res.status(404).send({ error: true, message: "Not found such route. please read API documentation" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
