import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + '/' + id);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }

  update(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl + '/' + id, user);
  }

  delete(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.apiUrl + '/' + id);
  }
}
