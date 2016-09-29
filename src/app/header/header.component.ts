import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  onSignOut() {
    this.authService.signoutUser();
    this.router.navigate(['/']);
  }
}
