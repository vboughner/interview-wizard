import {Injectable, EventEmitter } from '@angular/core';

import { Question } from './question';
import { StorageService } from '../data/storage.service';

@Injectable()
export class QuestionService {
  // in-memory storage for the entire list of questions
  private questions: Question[] = [];
  private questionsLoaded = false;

  // this emitter helps update components that cannot immediately be loaded
  // when the application starts, because the questions are not yet available,
  // by subscribing to it, and watching for changes, these components can
  // update themselves once the questions are available
  questionsChanged = new EventEmitter<Question[]>();

  constructor(private storageService: StorageService) {}

  // loads the questions from cloud storage, currently loaded only once, at the beginning
  private loadQuestions(): void {
    if (!this.questionsLoaded) {
      this.storageService.fetchData('questions')
        .subscribe(
          (data: any) => {
            const myArray = [];
            for (let key in data) {
              myArray.push(data[key]);
            }
            this.questions = myArray;
            this.questionsChanged.emit(this.questions);
          },
          error => console.error(error)
        );
      this.questionsLoaded = true;
      // console.log("questions are loading");
    }
  }

  // saves the questions to cloud storage
  // call this only when changes are made (add, edit, or delete)
  private saveQuestions(): void {
    this.storageService.storeData('questions', this.questions).subscribe();
    // console.log("questions are saving");
  }

  // gets the entire list of questions, don't modify the returned array
  // callers of this get method should also subscribe to questionsChanged emitter
  getQuestions(): Question[] {
    this.loadQuestions();
    return this.questions;
  }

  // gets just one question, given the index, don't modify the returns Question
  // callers of this get method should also subscribe to questionsChanged emitter
  getQuestion(id: number): Question {
    this.loadQuestions();
    return this.questions[id];
  }

  // call this when you edit a questions and need the
  // rest of the application and the storage to be updated
  editQuestion(oldQuestion: Question, newQuestion: Question): void {
    const index = this.questions.indexOf(oldQuestion);
    this.questions[index] = newQuestion;
    this.saveQuestions();
  }

  // call this when you add a question and need the
  // rest of the application and the storage to be updated
  // returns the index where new question was stored in array
  addQuestion(newQuestion: Question): number {
    const index = this.questions.length;
    this.questions.push(newQuestion);
    this.saveQuestions();
    return index;
  }

  // call this when you delete a question and need the
  // rest of the application and the storage to be updated
  deleteQuestion(oldQuestion: Question): void {
    const index = this.questions.indexOf(oldQuestion);
    this.questions.splice(index, 1);
    this.saveQuestions();
  }
}
