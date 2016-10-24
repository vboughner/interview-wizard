import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

/*
 * When a question is showing and it has no answers yet,
 * this component displays instead of the answer area.
 */
@Component({
  selector: 'app-answer-start',
  templateUrl: './answer-start.component.html'
})
export class AnswerStartComponent {
  constructor(private authService: AuthService) {}

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
