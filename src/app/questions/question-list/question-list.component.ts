import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from '@angular/core/src/metadata/directives';

import {Question} from '../question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [
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
  @Output() questionSelected = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(question: Question) {
    this.questionSelected.emit(question);
  }
}
