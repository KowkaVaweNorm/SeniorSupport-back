import { Repository } from "@/shared/repository/Repository";
import { type QuestionItem } from "../types/domen";


export class Question extends Repository<QuestionItem> {
  constructor(users?: QuestionItem[]) {
    const list = [
      {
        tags: ['tag1', 'tag2', 'tag3'],
        text: 'Как работает асинхронность в js?'
      },
      {
        tags: ['tag5', 'tag6', 'tag7'],
        text: 'Как работает безделье в js?'
      }
    ];
    super(users ?? list);
  }

  getAll(): Promise<QuestionItem[]> {
    return new Promise((res, rej)=> res(this.members));
  }

  getById(id: number): Promise<QuestionItem | undefined> {
    return new Promise((res, rej)=> res(this.members[0]));
  }

  create(question: QuestionItem): Promise<boolean> {
    console.log('create');
    return new Promise((res, rej)=> res(true));
  }

  update(id: number, question: QuestionItem): Promise<boolean> {
    console.log('updated:', id);
   return new Promise((res, rej)=> res(true));
    
  }
  
  delete(id: number): Promise<boolean> {
    console.log('deleted:', id);
   return new Promise((res, rej)=> res(true));
  }
}
