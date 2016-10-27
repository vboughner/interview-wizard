import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Question } from '../questions/question';
import { Answer } from './answer';
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
  answers: Answer[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    if (this.selectedQuestion) {
      this.answers = this.selectedQuestion.answers;
    }
    // todo: remove this
    console.log(this.answers);

    this.questions = this.questionService.getQuestions();
    this.subscription = this.questionService.questionsChanged.subscribe(
      (questions: Question[]) => {
        this.questions = questions
        this.answers = this.questions[this.questionId].answers;
        // todo: remove this
        console.log("updated answers to " + this.answers);
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
