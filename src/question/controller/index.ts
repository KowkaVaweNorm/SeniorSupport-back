import express from "express";
import { question } from "../model/types/domen";
const api = express.Router();

const list: question[] = [
  {
    text: "Асинхронность в js",
  },
];

api.get("/", (req, res) => {
  console.log("local endpoint GET");
  res.send(JSON.stringify(list));
}).post("/", (req, res) => {
  console.log("local endpoint POST");
  res.send(JSON.stringify(list));
})

export default api;
