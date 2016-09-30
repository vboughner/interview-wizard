import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

/*
 * When the application initially starts up, and no question is selected,
 * this component displays instead.  It's an About panel, of sorts.
 */
@Component({
  selector: 'app-question-start',
  templateUrl: './question-start.component.html'
})
export class QuestionStartComponent {
  constructor(private authService: AuthService) {}

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
