import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  serverUrl='http://localhost:3000';
  //http://localhost:3000/sample
  constructor(private http: HttpClient) { }
  getSample()
  {
    return this.http.get(this.serverUrl+'/sample');
  }
}
