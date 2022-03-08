import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoAddForm!: FormGroup;
  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createTodoAddForm();
    this.getUsers();
  }

  createTodoAddForm() {
    this.todoAddForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  add() {
    if (this.todoAddForm.valid) {
      let todoModel = Object.assign({}, this.todoAddForm.value);
      this.todoService.add(todoModel).subscribe((response) => {
        this.toastrService.success('Todo eklendi', todoModel.title);
      });
    } else {
      this.toastrService.warning('Formunuz eksik', 'Dikkat!');
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
