import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Router, ActivatedRoute } from '@angular/router';

import { Answer } from '../answer';
import { AuthService } from '../../auth/auth.service';
import { Question } from '../../questions/question';
import { QuestionService } from '../../questions/question.service';

/*
 * Area for displaying answers.
 */
@Component({
  selector: 'app-answer-area',
  templateUrl: './answer-area.component.html'
})
export class AnswerAreaComponent implements OnInit {
  private isConfirmDeleteVisible: boolean = false;
  private confirmDeleteMsg;

  @Input() question: Question;
  @Input() answer: Answer;
  @Input() answerId: number;

  answerFormattedDescription: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private questionService: QuestionService) {}

  ngOnInit() {
    if (this.answer) {
      this.answerFormattedDescription = this.answer.description.replace(/\r?\n/g, "<br />");
    }
    else {
      this.answerFormattedDescription = "Error: cannot format description yet";
    }
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  hasImage(): boolean {
    return (this.answer !== undefined &&
            this.answer.imagePath !== undefined &&
            this.answer.imagePath.length > 0);
  }

  onEditAnswer(): void {
    this.router.navigate(['answers', this.answerId], {relativeTo: this.route});
  }

  onNewAnswer(): void {
    this.router.navigate(['answers/new'], {relativeTo: this.route});
  }

  onDeleteAnswer(): void {
    this.confirmDeleteMsg = 'Are you sure you wish to delete the answer "' +
    this.answer.name + '"';
    this.isConfirmDeleteVisible = true;
  }

  confirmDelete() {
    this.isConfirmDeleteVisible = false;
    this.questionService.deleteAnswer(this.question, this.answerId);
    // we don't need to navigate after delete, because page automatically updates
  }

  cancelDelete() {
    this.isConfirmDeleteVisible = false;
  }
}
