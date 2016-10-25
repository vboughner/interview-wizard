import {Component, Input, OnInit } from '@angular/core';

import { Question } from '../questions/question';
import { Answer } from './answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
  @Input() selectedQuestion: Question;     // which question is this an answer for?
  @Input() questionId: number;
  @Input() answerIsEdit: boolean;  // is true when editing an answer or adding a new one
  @Input() answerId: string;       // is 'new' to add a new question, or a number when editing one

  answers: Answer[] = [];

  ngOnInit() {
    if (this.selectedQuestion) {
      this.answers = this.selectedQuestion.answers;
    }
    // todo: add question subscription
  }

  thereAreAnswers(): boolean {
    return (this.selectedQuestion && this.selectedQuestion.answers && this.selectedQuestion.answers.length > 0);
  }

  thereIsOneAnswer(): boolean {
    return (this.selectedQuestion && this.selectedQuestion.answers && this.selectedQuestion.answers.length === 1);
  }
}
