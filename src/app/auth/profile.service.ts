import { Injectable, EventEmitter } from '@angular/core';

import { Profile } from './profile';
import { StorageService } from '../data/storage.service';

@Injectable()
export class ProfileService {
  // in-memory storage for the profiles
  private profiles: Profile[] = [];
  private profilesLoaded: boolean = false;

  // this emitter helps update components that cannot immediately be loaded
  // when the application starts, by subscribing to it, and watching for
  // changes, these components can update themselves once the data is available
  profilesChanged = new EventEmitter<Profile[]>();

  constructor(private storageService: StorageService) { }

  // loads the list of profiles from cloud storage, currently loaded only once, at the beginning
  private loadProfiles(): void {
    if (!this.profilesLoaded) {
      this.storageService.fetchData('profiles')
        .subscribe(
          (data: any) => {
            const myArray = [];
            for (let key in data) {
              myArray.push(data[key]);
            }
            this.profiles = myArray;
            this.profilesChanged.emit(this.profiles);
          },
          error => console.error(error)
        );
      this.profilesLoaded = true;
    }
  }

  // saves the list of profiles to cloud storage
  // call this only when changes are made (add, edit, or delete)
  private saveProfiles(): void {
    this.storageService.storeData('profiles', this.profiles).subscribe();
  }

  // finds an element of an array of objects, by looking for a specific key/value pair within the objects
  // array = [{key:value},{key:value}]
  // from http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects/35398031#35398031
  // or also see http://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
  // todo: put this in a utility library or find a better way
  private objectFindByKey(array, key, value) {
    if (array != null) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }
    }
    return null;
  }

  // returns a Profile for given user, or null if the email address is not associated with any a profile
  getProfile(email: string): Profile {
    this.loadProfiles();
    return this.objectFindByKey(this.profiles, 'email', email);
  }

  // returns true if the given email address belongs to an administrator
  isAdmin(email: string): boolean {
    var p: Profile = this.getProfile(email);
    return (p && p.isAdmin);
  }

  // todo: note that current user must be an admin to call any of the methods below

  editProfile(email: string, updated: Profile): void {
    // todo: implement to replace an existing profile record with a new one (to change email address and/or name)
  }

  deleteProfile(email:string): void {
    // todo: implement to remove a profile
  }

  addProfile(name: string, email: string): void {
    // todo: implement to add a profile
  }
}
