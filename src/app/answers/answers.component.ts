import { Component, OnInit, Input } from '@angular/core';

import { Answer } from './answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
  @Input() answerIsEdit: boolean;  // is true when editing an answer or adding a new one
  @Input() answerId: string;       // is 'new' to add a new question, or a number when editing one

  answers: Answer[] = [];
  // answers: Answer[] = [
  //   new Answer('test1', 'desc', ''),
  //   new Answer('test2', 'desc', '')
  // ];

  constructor() { }

  ngOnInit() {
    console.log('answerIsEdit is ' + this.answerIsEdit);
    console.log('answerId is ' + this.answerId);
  }

  thereAreAnswers(): boolean {
    return (this.answers && this.answers.length > 0);
  }
}
