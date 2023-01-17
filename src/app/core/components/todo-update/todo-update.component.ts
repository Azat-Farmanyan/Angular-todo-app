import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../todo-main-widget/todo-main-widget.component';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss'],
})
export class TodoUpdateComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  @Input() todo: [string, Todo];

  form: FormGroup;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      todo: new FormControl(this.todo ? this.todo[1].description : '', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  updateTodo() {
    console.log('Edit');
    const newTodo = this.form.get('todo')?.value;
    const previousValue = this.todo[1].description;
    if (previousValue !== newTodo) {
      this.todoService
        .editTodo(this.todo[1], this.todo[0], newTodo)
        .subscribe((response) => {
          // console.log(response);
          this.onClose.emit();
          this.onUpdate.emit();
        });
    } else {
      this.onClose.emit();
    }
  }
}
