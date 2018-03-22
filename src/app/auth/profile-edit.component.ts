import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { AuthService } from './auth.service';

/*
 * Displays form for editing a user profile.
 */
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styles: []
})
export class ProfileEditComponent implements OnInit {
  user: User;
  profile: Profile;

  constructor(private authService: AuthService, private profileService: ProfileService) {}

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

  onSubmit(value: Profile) {
    // todo: save profile changes
    // const submittedProfile = new Profile(value.email, value.displayName, value.isAdmin, value.photoUrl, value.webSiteUrl);
    // this.profileService.editProfile(this.profile, submittedProfile);
    // todo: add routing for after save
  }
}
