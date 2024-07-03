// services/question.service.ts

import { Question } from "../repositories/question.repository";
import { QuestionItem } from "../types/domen";


class QuestionService {
  private questionRepository: Question;

  constructor(questionRepository: Question) {
    this.questionRepository = questionRepository;
  }

  public async getAllQuestions(): Promise<QuestionItem[]> {
    return await this.questionRepository.getAll();
  }

  public async getQuestionById(id: number): Promise<QuestionItem | undefined> {
    return await this.questionRepository.getById(id);
  }

  public async createQuestion(question: QuestionItem): Promise<boolean> {
    return await this.questionRepository.create(question);
  }

  public async updateQuestion(id: number, question: QuestionItem): Promise<boolean> {
    return await this.questionRepository.update(id, question);
  }

  public async deleteQuestion(id: number): Promise<boolean> {
    return await this.questionRepository.delete(id);
  }
}

export default QuestionService;
