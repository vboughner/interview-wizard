import {Component, OnInit, EventEmitter} from '@angular/core';
import {Output} from '@angular/core/src/metadata/directives';

import {Question} from '../question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  @Output() questionSelected = new EventEmitter<Question>();
  question = new Question('Dummy', 'Dummy Description',
    'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg');
  question2 = new Question('Dummy2', 'Dummy Description2',
    'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(question: Question) {
    this.questionSelected.emit(question);
  }
}
