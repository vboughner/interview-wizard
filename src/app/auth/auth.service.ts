import { Injectable } from '@angular/core';

import { User } from './user';
import { AdminService } from './admin.service';

// firebase initialized in top-level index.html, this declaration allows access
// to JavaScript object returned by the successful initialization of firebase
declare var firebase: any;

/*
 * Authentication is handled by calling the firebase service (in the cloud) to
 * add and authenticate users by email address and password.
 */
@Injectable()
export class AuthService {

  constructor(private adminService: AdminService) {}

  signupUser(user: User): void {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);

        // todo: add a better way than alert to handle errors when signing up
        alert(error.message);
      });
  }

  signinUser(user: User): void {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);

        // todo: add a better way than alert to handle errors when signing in
        alert(error.message);
      });
  }

  signoutUser(): void {
    firebase.auth().signOut();
    // todo: add some sort of toast that appears after signing out
  }

  // returns true if the current user has been authenticated
  isAuthenticated(): boolean {
    var user = firebase.auth().currentUser;
    console.log(user);
    return (user ? true : false);
  }

  // returns true if the current user has been authenticated and is an administrative user
  isAdmin(): boolean {
    var user = firebase.auth().currentUser;
    return (user && this.adminService.isAdmin(user.email));
  }
}
