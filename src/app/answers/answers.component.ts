import { Component, OnInit, Input } from '@angular/core';

import { Answer } from './answer';
import { Question } from '../questions/question';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
  @Input() selectedQuestion: Question;     // which question is this an answer for?
  @Input() questionId: number;
  @Input() answerIsEdit: boolean;  // is true when editing an answer or adding a new one
  @Input() answerId: string;       // is 'new' to add a new question, or a number when editing one

  // todo: implement getting the answer data and display one or more answers
  answers: Answer[] = [];
  // answers: Answer[] = [
  //   new Answer('test1', 'desc', ''),
  //   new Answer('test2', 'desc', '')
  // ];

  constructor() { }

  ngOnInit() {
    // todo: removing these debugging lines
    // console.log('selectedQuestion is ' + this.selectedQuestion);
    // console.log('answerIsEdit is ' + this.answerIsEdit);
    // console.log('answerId is ' + this.answerId);
  }

  thereAreAnswers(): boolean {
    return (this.answers && this.answers.length > 0);
  }
}
