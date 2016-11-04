import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

import { Answer } from '../answer';
import { Question } from '../../questions/question';
import { Router } from '@angular/router';
import { QuestionService } from '../../questions/question.service';

/*
 * Displays form for editing a single answer, and can be used both for
 * editing or for adding a new answer.
 */
@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html'
})
export class AnswerEditComponent implements OnInit {
  @Input() selectedQuestion: Question;
  @Input() questionId: number;
  @Input() answerId: string;  // is 'new' for a new question

  selectedAnswer: Answer;
  isAdd: boolean = false;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.isAdd = (this.answerId === "new");
    this.selectedAnswer = this.selectedQuestion.answers[this.answerId];
  }

  onSubmit(value: Answer) {
    const submittedAnswer = new Answer(value.name, value.description, value.imagePath);
    if (this.answerId === "new") {
      this.questionService.addAnswer(this.selectedQuestion, submittedAnswer);
    }
    else {
      this.questionService.editAnswer(this.selectedQuestion, Number(this.answerId), submittedAnswer);
    }
    this.router.navigate(['/questions', this.questionId]);
  }

}
