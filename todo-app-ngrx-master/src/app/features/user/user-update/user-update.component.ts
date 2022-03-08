import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  userUpdateForm!: FormGroup;
  user: User = { id: 0, name: '' };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.activatedRoute.params.subscribe((params) => {
      this.getUserById(params['id']);
    });
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  update() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      this.userService.update(this.user.id, userModel).subscribe((response) => {
        this.toastrService.info('User güncellendi', userModel.name);
      });
    } else {
      this.toastrService.warning('Formunuz eksik', 'Dikkat!');
    }
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data;
    });
  }
}
