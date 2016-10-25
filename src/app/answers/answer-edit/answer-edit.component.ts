import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

import { Answer } from '../answer';
import { Question } from '../../questions/question';
import {Router} from "@angular/router";

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

  selectedAnswer: Answer = new Answer('test1', 'desc', '');
  isAdd: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // todo: remove these debugging lines
    // console.log('selectedQuestion is ' + this.selectedQuestion);
    // console.log('answerId is ' + this.answerId);
    this.isAdd = (this.answerId === "new");
  }

  onSubmit(value: Answer) {
    const submittedQuestion = new Answer(value.name, value.description, value.imagePath);
    if (this.answerId === "new") {
      // todo: implement
      // const index = this.questionService.addQuestion(submittedQuestion);
    }
    else {
      // todo: implement
      // this.questionService.editQuestion(this.selectedQuestion, submittedQuestion);
    }
    this.router.navigate(['/questions', this.questionId]);
  }

}
