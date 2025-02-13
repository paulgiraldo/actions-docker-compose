import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://24.144.65.234/api/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  addUser(user: {firstName: string, lastName:string, age: number}) {
    return this.http.post(this.apiUrl, user);
  }
}
