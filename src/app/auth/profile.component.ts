import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { Profile } from './profile';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User;
  profile: Profile;

  constructor(private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    if (this.user) {
      // console.log(this.user);
      this.profile = this.profileService.getProfile(this.user.email);
      if (!this.profile) {
        // todo: later when authentication by Google or Facebook is allow, could grab displayName and photoURl from firebase user
        this.profile = new Profile(this.user.email, '', false, '', '');
      }
    }
    else {
      console.log("Error: cannot get own user record, probably not logged in");
      this.user = {
        email: 'Not logged in',
        password: ''
      };
      this.profile = new Profile(this.user.email, '', false, '', '');
    }
  }

  isSignedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
