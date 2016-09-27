import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html',
  styles: []
})
export class QuestionAreaComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private questionIndex: number;
  selectedQuestion: Question;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.questionIndex = params['id'];
        this.selectedQuestion = this.questionService.getQuestion(this.questionIndex);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
