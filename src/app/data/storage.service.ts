import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

declare var firebaseConfig: any;  // from the top-level index.html file

@Injectable()
export class StorageService {
  private databaseURL = firebaseConfig.databaseURL;

  constructor(private http:Http) {}

  storeData(dataname: string, data: any) {
    const url = this.databaseURL + "/" + dataname + ".json";
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(url, body, {headers: headers})
      .map((response: Response) => response.json());
  }

  fetchData(dataname: string) {
    const url = this.databaseURL + "/" + dataname + ".json";
    return this.http.get(url)
      .map((response: Response) => response.json());
  }
}
