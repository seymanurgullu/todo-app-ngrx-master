import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/models/todo/todo';
import { TodoService } from 'src/app/services/todo.service';
import { PagingInfo } from 'src/app/shared/models/paging-info';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;
  pagingInfo: PagingInfo = { currentPage: 1, itemsPerPage: 10 };
  filterText: string = '';

  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.loading = false;
    });
    

    this.activatedRoute.params.subscribe((params) => {
      this.getTodosByUser(params['userId']);
    });

  }

  getTodosByUser(userId: number) {
    this.todoService.getTodosByUser(userId).subscribe((data) => {
      this.todos = data;
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe((data) => {
      this.todos = this.todos.filter((t) => t.id !== id);
      this.toastrService.success('Todo silindi', 'Başarılı');
    });
  }
}
