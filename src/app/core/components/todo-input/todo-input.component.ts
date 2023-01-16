import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  form: FormGroup;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      todo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  addTodo() {
    const newTodo = this.form.get('todo')?.value;
    this.todoService.addTodo(newTodo).subscribe((response) => {
      // console.log(response);
      this.onClose.emit();
      this.onSubmit.emit();
    });
    // this.onSubmit.emit(newTodo);
  }
}
