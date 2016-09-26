import {Component, OnInit, Input} from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styles: []
})
export class QuestionItemComponent implements OnInit {
  // @Input question: Question;
  question = new Question('Dummy', 'Dummy Description', 'http://assets.uvamagazine.org/images/uploads/2009/01-Spring/Research/Dummy.jpg');
  questionId: number;

  constructor() { }

  ngOnInit() {
  }

}
