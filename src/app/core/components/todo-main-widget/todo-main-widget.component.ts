import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoService } from '../../services/todo.service';

export interface Todo {
  description: string;
  done: boolean;
  date?: string;
}

@Component({
  selector: 'app-todo-main-widget',
  templateUrl: './todo-main-widget.component.html',
  styleUrls: ['./todo-main-widget.component.scss'],
})
export class TodoMainWidgetComponent implements OnInit, OnDestroy {
  todos: [string, Todo][] = [];
  showTodoInputModal = false;

  fetchSubscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.fetchSubscription = this.todoService
      .fetchTodo()
      .subscribe((response) => {
        if (response) this.todos = Object.entries(response).reverse();
      });
  }
  deleteTodo(key: string) {
    console.log(this.todos);

    console.log(key);

    this.todos = this.todos.filter((el) => {
      return el[0] !== key;
    });
  }
  ngOnDestroy(): void {
    this.fetchSubscription.unsubscribe();
  }
}
