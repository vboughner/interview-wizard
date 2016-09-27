import { Injectable } from '@angular/core';

import { Question } from './question';

@Injectable()
export class QuestionService {
  private questions: Question[] = [
    new Question('Are you a crash test dummy?',
      'Some employers will want to make sure you\'re not a dummy.  Experience with crash tests is not a positive.',
      'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg'),
    new Question('What do you think of jam made from raspberries?',
      'This question might be asked whenever there are raspberries involved in the project.',
      'http://kingofwallpapers.com/fruit-images/fruit-images-004.jpg'),
    new Question('Are you from New Zealand?',
      'Some employers will want to know if you are from New Zealand, where people refer to themselves as' +
      '"Kiwies".  Do you ever refer to yourself by naming a fruit?',
      'http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_kiwi.jpg')
  ];

  constructor() { }

  getQuestions() {
    return this.questions;
  }

  getQuestion(id: number) {
    return this.questions[id];
  }
}
