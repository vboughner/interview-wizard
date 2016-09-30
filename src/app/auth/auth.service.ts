import { Injectable } from '@angular/core';

import { User } from './user';
import { Router } from '@angular/router';

// firebase initialized in top-level index.html, this declaration allows access
// to JavaScript object returned by the successful initialization of firebase
declare var firebase: any;

/*
 * Authentication is handled by calling the firebase service (in the cloud) to
 * add and authenticate users by email address and password.
 */
@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signoutUser() {
    firebase.auth().signOut();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;
    return (user ? true : false);
  }
}
