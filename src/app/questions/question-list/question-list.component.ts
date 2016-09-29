import { Component, OnInit } from '@angular/core';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService: QuestionService,
              private authService: AuthService) {}

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
