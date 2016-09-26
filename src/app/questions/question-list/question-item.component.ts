import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styles: []
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Question;
  questionId: number;

  constructor() { }

  ngOnInit() {
  }

}
