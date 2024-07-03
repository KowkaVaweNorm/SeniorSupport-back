import express from "express";
import dotenv from "dotenv";
import questionApi from "./question";

export const app = express();

// Загрузка переменных окружения из .env файла
dotenv.config();
const port = process.env.PORT;

app.use(express.json());

app.use("/question", questionApi);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  if (res !== undefined) {
    res.json(res);
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
