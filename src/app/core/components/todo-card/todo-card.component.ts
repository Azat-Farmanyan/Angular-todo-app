import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../todo-main-widget/todo-main-widget.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent implements OnInit {
  @Input() todo: [string, Todo];
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter();

  isDone = false;
  menuOpened = false;

  constructor(public todoService: TodoService) {}
  ngOnInit(): void {}

  toggle() {
    this.todoService.updateTodo(this.todo[1], this.todo[0]).subscribe(() => {
      console.log('updated');
      this.onUpdate.emit();
    });
  }
  menuToggle() {
    this.menuOpened = !this.menuOpened;
  }
  deleteTodo() {
    this.todoService.deleteTodo(this.todo[0]).subscribe(() => {
      this.onDelete.emit(this.todo[0]);
    });
  }
}
