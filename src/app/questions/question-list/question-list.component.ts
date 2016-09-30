import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { AuthService } from '../../auth/auth.service';

/*
 * Displays a list of all questions.
 */
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  questions: Question[] = [];

  constructor(private questionService: QuestionService,
              private authService: AuthService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.subscription = this.questionService.questionsChanged.subscribe(
      (questions: Question[]) => this.questions = questions
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
