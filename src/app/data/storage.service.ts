import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

// Firebase is configured in the top-level index.html file,
// this declaration provides access to the configuration data.
declare var firebaseConfig: any;

/*
 * Storage is in the cloud, using Google Firebase NoQSL database.
 * Callers provide the name of the JSON object within the database.
 *
 * Currently the store and fetch operations are meant to store an entire
 * data model, all-at-once.  Still need to update this technique for properly
 * handling multiple simultaneous users who might be making updates,
 * because right now they might overwrite each others changes.
 */
// todo: storage strategy needs to be updated to handle multiple simultaneous users
@Injectable()
export class StorageService {
  private databaseURL = firebaseConfig.databaseURL;

  constructor(private http:Http) {}

  /*
   * Stores a JSON object on the cloud at the named location.
   * Returns an Observable, and caller must use subscribe() on the
   * Observable to make sure it is actually executed and will
   * return something.
   */
  storeData(dataname: string, data: any): Observable<any> {
    const url = this.databaseURL + "/" + dataname + ".json";
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url, body, {headers: headers})
      .map((response: Response) => response.json());
  }

  /*
   * Fetches a JSON object from the cloud at the named
   * location and converts it from JSON into an Object.
   * Returns an Observable, caller must use subscribe() on the
   * Observable to make sure this is actually executed and will
   * return something.
   */
  fetchData(dataname: string): Observable<any> {
    const url = this.databaseURL + "/" + dataname + ".json";
    return this.http.get(url)
      .map((response: Response) => response.json());
  }
}
