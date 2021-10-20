const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.use(express.json());
// app.use(require("./routes"));

mongoose
.connect(
  "mongodb+srv://atam:qwer@cluster0.bvs4i.mongodb.net/Pharmacy?retryWrites=true&w=majority"
)
.then(() => console.log("Успешно соединились с сервером MongoDB"))
.catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("Сервер запущен успешно");
});
