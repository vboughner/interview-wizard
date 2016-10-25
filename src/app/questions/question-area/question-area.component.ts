import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Question } from '../question';
import { QuestionService } from '../question.service';
import { AuthService } from '../../auth/auth.service';

/*
 * Displays details about a single question, and includes buttons for editing
 * or deleting the question.
 */
@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html'
})
export class QuestionAreaComponent implements OnInit, OnDestroy {
  private isConfirmDeleteVisible: boolean = false;
  private confirmDeleteMsg;
  private routeSubscription: Subscription;
  private questionSubscription: Subscription;
  questionId: number;
  selectedQuestion: Question;
  selectedQuestionFormattedDescription: string = '';

  answerIsEdit: boolean = false;   // is true when editing an answer or adding a new one
  answerId: number;                // is 'new' to add a new question, or a number when editing one

  constructor(private router: Router,
              private route: ActivatedRoute,
              private questionService: QuestionService,
              private authService: AuthService) {}

  // sets the selectedQuestion and the formatted description,
  // call this whenever the selected question index changes
  private setSelectedQuestion(q: Question) {
    this.selectedQuestion = q;
    if (q) {
      this.selectedQuestionFormattedDescription =
        this.selectedQuestionFormattedDescription = q.description.replace(/\r?\n/g, "<br />");
    }
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      (params: any) => {
        this.questionId = params['id'];
        this.setSelectedQuestion(this.questionService.getQuestion(this.questionId));
        if (params['answerId']) {
          this.answerIsEdit = true;
          this.answerId = params['answerId'];
        }
        else {
          this.answerIsEdit = false;
        }
      }
    );

    this.questionSubscription = this.questionService.questionsChanged.subscribe(
      (questions: Question[]) => {
        if (this.questionId >= 0 && this.questionId < questions.length) {
          this.setSelectedQuestion(questions[this.questionId]);
        }
      }
    )
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.questionSubscription.unsubscribe();
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
