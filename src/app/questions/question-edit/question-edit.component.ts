import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html'
})
export class QuestionEditComponent implements OnInit {
  private subscription: Subscription;
  private questionIndex: number;
  selectedQuestion: Question;
  isAdd: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if ('id' in params) {
          this.questionIndex = params['id'];
          this.selectedQuestion = this.questionService.getQuestion(this.questionIndex);
          this.isAdd = false;
        }
        else {
          this.questionIndex = -1;
          this.selectedQuestion = new Question('','','');
          this.isAdd = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value: Question) {
    const submittedQuestion = new Question(value.name, value.description, value.imagePath);
    if (this.isAdd) {
      this.questionService.addQuestion(submittedQuestion);
    }
    else {
      this.questionService.editQuestion(this.selectedQuestion, submittedQuestion);
    }
  }

  onDelete() {
    this.questionService.deleteQuestion(this.selectedQuestion);
    this.router.navigate(['/questions']);
    // bug: why does form clear?
  }

  onCancel() {
    if (this.isAdd) {
      console.log('isAdd ' + '/questions');
      this.router.navigate(['/questions']);
    }
    else {
      console.log('isAdd ' + '/questions' + this.questionIndex);
      this.router.navigateByUrl('/questions/' + this.questionIndex);
      // bug: why is all the form data in the URL?
    }
  }
}
