import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl: string = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.apiUrl + '/' + id);
  }

  getTodosByUser(userId: number): Observable<Todo[]> {
    let newPath = this.apiUrl;
    if (userId) {
      newPath += '?userId=' + userId;
    }
    return this.httpClient.get<Todo[]>(newPath);
  }

  add(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiUrl, todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(this.apiUrl + '/' + id, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.apiUrl + '/' + id);
  }
}
