import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Router, ActivatedRoute } from '@angular/router';

import { Answer } from '../answer';
import { AuthService } from '../../auth/auth.service';

/*
 * Area for displaying answers.
 */
@Component({
  selector: 'app-answer-area',
  templateUrl: './answer-area.component.html'
})
export class AnswerAreaComponent implements OnInit {
  @Input() answer: Answer;
  @Input() answerId: number;

  answerFormattedDescription: string = '';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

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

  onEditAnswer(): void {
    this.router.navigate(['answers', this.answerId], {relativeTo: this.route});
  }

  onNewAnswer(): void {
    this.router.navigate(['answers/new'], {relativeTo: this.route});
  }

  onDeleteAnswer(): void {
    alert("delete answer");
  }
}
