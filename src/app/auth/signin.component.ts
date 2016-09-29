import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit():any {
      this.signinForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
      });
  }

  onSignin() {
    this.authService.signinUser(this.signinForm.value);
    this.router.navigate(['/']);
  }
}
