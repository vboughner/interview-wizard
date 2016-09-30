import { Injectable } from '@angular/core';

import { User } from './user';

// firebase initialized in top-level index.html, this declaration allows access
// to JavaScript object returned by the successful initialization of firebase
declare var firebase: any;

/*
 * Authentication is handled by calling the firebase service (in the cloud) to
 * add and authenticate users by email address and password.
 */
@Injectable()
export class AuthService {

  constructor() {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);

        // todo: add a better way than alert to handle errors when signing up
        alert(error.message);
      });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);

        // todo: add a better way than alert to handle errors when signing in
        alert(error.message);
      });
  }

  signoutUser() {
    firebase.auth().signOut();
    // todo: add some sort of toast that appears after signing out
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;
    return (user ? true : false);
  }
}
