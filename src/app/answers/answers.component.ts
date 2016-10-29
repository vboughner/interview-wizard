import {Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Question } from '../questions/question';
import { QuestionService } from "../questions/question.service";

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html'
})
export class AnswersComponent implements OnInit {
  @Input() selectedQuestion: Question;     // which question is this an answer for?
  @Input() questionId: number;
  @Input() answerIsEdit: boolean;  // is true when editing an answer or adding a new one
  @Input() answerId: string;       // is 'new' to add a new question, or a number when editing one

  private subscription: Subscription;
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.subscription = this.questionService.questionsChanged.subscribe(
      (questions: Question[]) => {
        this.questions = questions;
        this.selectedQuestion = this.questions[this.questionId]
      }
    )
  }

  thereAreAnswers(): boolean {
    return (this.selectedQuestion && this.selectedQuestion.answers && this.selectedQuestion.answers.length > 0);
  }

  thereIsOneAnswer(): boolean {
    return (this.selectedQuestion && this.selectedQuestion.answers && this.selectedQuestion.answers.length === 1);
  }
}
