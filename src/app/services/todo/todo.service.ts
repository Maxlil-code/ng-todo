import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any[]>('http://localhost:3000/tasks');
  }
}
