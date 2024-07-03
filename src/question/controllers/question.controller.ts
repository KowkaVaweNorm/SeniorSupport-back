import express from "express";
import QuestionService from "../services/question.service";
import { Question } from "../repositories/question.repository";
export const router = express.Router();

const questionRepository = new Question();
const questionService = new QuestionService(questionRepository);

router.get("/", (req, res) => {
  res.send(questionService.getAllQuestions);
});
