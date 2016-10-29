import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.answer) {
      this.answerFormattedDescription = this.answer.description.replace(/\r?\n/g, "<br />");
    }
    else {
      this.answerFormattedDescription = "cannot format description yet";
    }
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
