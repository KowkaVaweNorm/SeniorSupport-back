import express from "express";
import dotenv from "dotenv";
import {api} from "./question";

export const app = express();

// Загрузка переменных окружения из .env файла
dotenv.config();
const port = process.env.PORT;

app.use("/question", api);
app
  .route("/todo")
  .get((request, response) => {
    response.send("TODO LIST ON THIS PAGE");
  })
  .post(function (request, response) {
    response.send("TODO LIST is POST REQUEST");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book");
  })

  .post(function (req, res) {
    res.send("Add a book");
  })
  .put(function (req, res) {
    res.send("Update the book");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
