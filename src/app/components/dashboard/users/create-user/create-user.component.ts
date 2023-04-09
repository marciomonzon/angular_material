import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  gender: any[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'F', viewValue: 'Female'}
  ];
  form!: FormGroup;

  constructor(private _form: FormBuilder,
              private _userService: UserService,
              private _router: Router,
              private _snackbar: MatSnackBar) {

    this.form = this._form.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  addUser() {

    const user: User = {
      id: 1,
      user: this.form.value.user,
      name: this.form.value.name,
      gender: this.form.value.gender
    }

    this._userService.addUser(user);
    this._router.navigate(['/dashboard/users']);

    this._snackbar.open('User added successfully', 'Info', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500
    })
  }
}
