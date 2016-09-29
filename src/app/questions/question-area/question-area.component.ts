import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html',
  styles: []
})
export class QuestionAreaComponent implements OnInit, OnDestroy {
  private isConfirmDeleteVisible: boolean = false;
  private confirmDeleteMsg;
  private subscription: Subscription;
  private questionIndex: number;
  selectedQuestion: Question;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionService: QuestionService,
              private authService: AuthService) {}

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

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  onDelete() {
    this.confirmDeleteMsg = 'Are you sure you wish to delete the question "' +
    this.selectedQuestion.name + '"';
    this.isConfirmDeleteVisible = true;
  }

  confirmDelete() {
    this.isConfirmDeleteVisible = false;
    this.questionService.deleteQuestion(this.selectedQuestion);
    this.router.navigate(['/questions']);
  }

  cancelDelete() {
    this.isConfirmDeleteVisible = false;
  }
}
