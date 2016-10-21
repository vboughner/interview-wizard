import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private isCategoryNoteVisible: boolean = false;
  private categoryNoteMsg = "Please note that the Category feature is not yet implemented. " +
    "This dropdown menu remains as a way to help demonstrate navigation bar features, " +
    "and once categories are implemented it will help filter questions.";

  constructor(private authService: AuthService, private router: Router) {}

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isSignedInAdmin(): boolean {
    return this.authService.isAdmin();
  }

  onSignOut() {
    this.authService.signoutUser();
    this.router.navigate(['/']);
  }

  onCategoryUse() {
    this.isCategoryNoteVisible = true;
  }

  cancelCategoryNote() {
    this.isCategoryNoteVisible = false;
  }
}
