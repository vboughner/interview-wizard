import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';

/*
 * Displays form for editing a single question, and can be used both for
 * editing a question, or for adding a new one.
 */
@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html'
})
export class QuestionEditComponent implements OnInit {
  private subscription: Subscription;
  private questionIndex: number;
  selectedQuestion: Question;
  isAdd: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private questionService: QuestionService) {}

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
          this.selectedQuestion = new Question('','','', null);
          this.isAdd = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value: Question) {
    const submittedQuestion = new Question(value.name, value.description, value.imagePath, null);
    if (this.isAdd) {
      const index = this.questionService.addQuestion(submittedQuestion);
      this.router.navigate(['/questions', index]);
    }
    else {
      this.questionService.editQuestion(this.selectedQuestion, submittedQuestion);
      this.router.navigate(['/questions', this.questionIndex]);
    }
  }
}
