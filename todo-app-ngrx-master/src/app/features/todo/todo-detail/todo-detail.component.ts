import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo/todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  todo: Todo = { id: 0, userId: 0, title: '', completed: true };

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getTodoById(params["id"])
    })
  }

  getTodoById(id:number) {
    this.todoService.getTodoById(id).subscribe(data=>{
      this.todo = data
    })
  }
}
