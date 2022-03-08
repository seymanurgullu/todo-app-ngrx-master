import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';
import { PagingInfo } from 'src/app/shared/models/paging-info';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = true;
  filterText: string = '';
  pagingInfo: PagingInfo = { currentPage: 1, itemsPerPage: 10 };

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  delete(id: number) {
    this.userService.delete(id).subscribe((data) => {
      this.users = this.users.filter((u) => u.id !== id);
      this.toastrService.success('User silindi', 'Başarılı');
    });
  }
}
