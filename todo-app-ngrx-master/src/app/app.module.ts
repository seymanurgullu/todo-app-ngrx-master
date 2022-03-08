import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoAddComponent } from './features/todo/todo-add/todo-add.component';
import { TodoDetailComponent } from './features/todo/todo-detail/todo-detail.component';
import { TodoUpdateComponent } from './features/todo/todo-update/todo-update.component';
import { UserAddComponent } from './features/user/user-add/user-add.component';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { UserUpdateComponent } from './features/user/user-update/user-update.component';
import { AlbumListComponent } from './features/album/album-list/album-list.component';
import { FavoriteListComponent } from './features/favorite/favorite-list/favorite-list.component';
import { TodoNaviComponent } from './features/navi/todo-navi/todo-navi.component';
import { TodoFilterPipe } from './pipes/todo-filter.pipe';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { UserTableComponent } from './features/user/user-table/user-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/reducers/favorite-reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoDetailComponent,
    TodoUpdateComponent,
    UserAddComponent,
    UserListComponent,
    UserUpdateComponent,
    AlbumListComponent,
    FavoriteListComponent,
    TodoNaviComponent,
    TodoFilterPipe,
    UserFilterPipe,
    NotFoundComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    StoreModule.forRoot(
      { favoriteReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
