import {Injectable, EventEmitter } from '@angular/core';

import { Question } from './question';
import { StorageService } from '../data/storage.service';

@Injectable()
export class QuestionService {
  /*
  private questions: Question[] = [
    new Question('Are you a crash test dummy?',
      'Some employers will want to make sure you\'re not a dummy.  Experience with crash tests is not a positive.',
      'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg'),
    new Question('Where are you from?',
      'This is a likely a way to discover what are your interests, based on the location of your home.  You should go ahead and let them know who you are.',
      'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png'),
    new Question('What do you think of jam made from raspberries?',
      'This question might be asked whenever there are raspberries involved in the project.',
      'http://kingofwallpapers.com/fruit-images/fruit-images-004.jpg'),
    new Question('Are you from New Zealand?',
      'Some employers will want to know if you are from New Zealand, where people refer to themselves as' +
      '"Kiwies".  Do you ever refer to yourself by naming a fruit?',
      'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_kiwi.jpg')
  ];
  */
  private questions: Question[] = [];
  private questionsLoaded = false;
  questionsChanged = new EventEmitter<Question[]>();

  constructor(private storageService: StorageService) {}

  private loadQuestions() {
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

  private saveQuestions() {
    this.storageService.storeData('questions', this.questions).subscribe();
    // console.log("questions are saving");
  }

  // todo: all callers of this get method should be subscribing to the emitter
  getQuestions() {
    this.loadQuestions();
    return this.questions;
  }

  // todo: all callers of this get method should be subscribing to the emitter
  getQuestion(id: number) {
    this.loadQuestions();
    return this.questions[id];
  }

  editQuestion(oldQuestion: Question, newQuestion: Question) {
    const index = this.questions.indexOf(oldQuestion);
    this.questions[index] = newQuestion;
    this.saveQuestions();
  }

  addQuestion(newQuestion: Question): number {
    const index = this.questions.length;
    this.questions.push(newQuestion);
    this.saveQuestions();
    return index;
  }

  deleteQuestion(oldQuestion: Question) {
    const index = this.questions.indexOf(oldQuestion);
    this.questions.splice(index, 1);
    this.saveQuestions();
  }
}
