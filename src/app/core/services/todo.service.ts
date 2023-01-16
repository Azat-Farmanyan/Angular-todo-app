import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../components/todo-main-widget/todo-main-widget.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  fetchTodo() {
    return this.http.get<Todo[]>(`${this.baseUrl}todos.json`);
  }
  addTodo(todo: any) {
    return this.http.post(`${this.baseUrl}todos.json`, {
      description: todo,
      done: false,
      date: new Date().toISOString().split('T')[0],
    });
  }
  deleteTodo(key: string) {
    return this.http.delete(`${this.baseUrl}todos/${key}.json`);
  }
}
