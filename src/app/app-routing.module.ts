import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './features/album/album-list/album-list.component';
import { FavoriteListComponent } from './features/favorite/favorite-list/favorite-list.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { TodoAddComponent } from './features/todo/todo-add/todo-add.component';
import { TodoDetailComponent } from './features/todo/todo-detail/todo-detail.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './features/todo/todo-update/todo-update.component';
import { UserAddComponent } from './features/user/user-add/user-add.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserUpdateComponent } from './features/user/user-update/user-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/add', component: TodoAddComponent },
  { path: 'todos/update/:id', component: TodoUpdateComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserAddComponent },
  { path: 'users/update/:id', component: UserUpdateComponent },
  { path: 'user-todos/:userId', component: TodoListComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'favorites', component: FavoriteListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
