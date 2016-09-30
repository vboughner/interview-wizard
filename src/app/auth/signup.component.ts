import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): any {
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        this.isEmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.required,
        this.isMinLengthPasswordValidator
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPasswordValidator.bind(this)
      ])],
    });
  }

  onSignup() {
    this.authService.signupUser(this.signupForm.value);
    this.router.navigate(['/']);
  }

  isEmailValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\.[a-zA-Z]+$/)) {
      return {noEmail: true};
    }
    return null;
  }

  isMinLengthPasswordValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length < 6) {
      return {passwordTooShort: true};
    }
    return null;
  }

  isEqualPasswordValidator(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.signupForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
    return null;
  }
}
