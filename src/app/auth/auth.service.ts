import { Injectable } from '@angular/core';

import { User } from './user';
import { Router } from '@angular/router';

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

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
