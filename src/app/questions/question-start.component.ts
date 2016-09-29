import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

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
