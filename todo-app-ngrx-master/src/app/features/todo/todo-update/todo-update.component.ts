import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo/todo';
import { User } from 'src/app/models/user/user';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css'],
})
export class TodoUpdateComponent implements OnInit {
  todoUpdateForm!: FormGroup;
  todo: Todo = { id: 0, userId: 0, title: '', completed: true };
  users: User[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private toastrService: ToastrService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createTodoUpdateForm();
    this.getUsers();
    this.activatedRoute.params.subscribe((params) => {
      this.getTodoById(params['id']);
    });
  }

  createTodoUpdateForm() {
    this.todoUpdateForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  update() {
    if (this.todoUpdateForm.valid) {
      let todoModel = Object.assign({}, this.todoUpdateForm.value);
      this.todoService.update(this.todo.id, todoModel).subscribe((response) => {
        this.toastrService.info('Todo güncellendi', todoModel.title);
      });
    } else {
      this.toastrService.warning('Formunuz eksik', 'Dikkat');
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getTodoById(id: number) {
    this.todoService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }
}
