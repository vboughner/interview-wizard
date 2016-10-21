import { Injectable, EventEmitter } from '@angular/core';

import { Admin } from './admin';
import { StorageService } from '../data/storage.service';

// todo: this class should be expanded to contain all extended information about a user, and not just admin status

@Injectable()
export class AdminService {
  // in-memory storage for the list of administrators
  private admins: Admin[] = [];
  private adminsLoaded: boolean = false;

  // this emitter helps update components that cannot immediately be loaded
  // when the application starts, by subscribing to it, and watching for
  // changes, these components can update themselves once the data is available
  adminsChanged = new EventEmitter<Admin[]>();

  constructor(private storageService: StorageService) { }

  // loads the list of admin from cloud storage, currently loaded only once, at the beginning
  private loadAdmins(): void {
    if (!this.adminsLoaded) {
      this.storageService.fetchData('admins')
        .subscribe(
          (data: any) => {
            const myArray = [];
            for (let key in data) {
              myArray.push(data[key]);
            }
            this.admins = myArray;
            this.adminsChanged.emit(this.admins);
          },
          error => console.error(error)
        );
      this.adminsLoaded = true;
      // console.log("admins are loading");
    }
  }

  // saves the list of administrators to cloud storage
  // call this only when changes are made (add, edit, or delete)
  private saveAdmins(): void {
    this.storageService.storeData('admins', this.admins).subscribe();
    // console.log("admins are saving");
  }

  // array = [{key:value},{key:value}]
  // from http://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects/35398031#35398031
  // or also see http://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
  // todo: put this in a utility library or find a better way
  private objectFindByKey(array, key, value) {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
  }

  // todo: implement this to look at the admin list, return an Admin record, or null if the email does not belong to an admin
  getAdmin(email: string): Admin {
    this.loadAdmins();
    if (this.admins) {
      // console.log('finding...');
      var retval = this.objectFindByKey(this.admins, 'email', email);
      // console.log('found = ' + retval);
      return retval;
    }
    else {
      // console.log('not found');
      return null;
    }
  }

  // returns true if the given email address belongs to an administrator
  isAdmin(email: string): boolean {
    var a: Admin = this.getAdmin(email);
    return (a != null);
  }

  // todo: note that current user must be an admin to call any of the methods below

  editAdmin(email: string, updated: Admin): void {
    // todo: implement to replace an existing admin record with a new one (to change email address and/or name)
  }

  deleteAdmin(email:string): void {
    // todo: implement to remove an administrator
  }

  addAdmin(name: string, email: string): void {
    // todo: implement to add an administrator
  }
}
