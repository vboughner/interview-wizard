import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

import { Answer } from '../answer';

/*
 * Area for displaying answers.  Not implemented yet.
 */
// todo: implement display of answers
@Component({
  selector: 'app-answer-area',
  templateUrl: './answer-area.component.html'
})
export class AnswerAreaComponent implements OnInit {
  @Input() answer: Answer;
  @Input() answerId: number;

  constructor() {}

  ngOnInit() {
  }

}
