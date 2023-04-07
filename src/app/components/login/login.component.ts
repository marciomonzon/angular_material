import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png'
  form: FormGroup;
  loading = false;
  
  constructor(private _router: Router,
              private _fb: FormBuilder,
              private _snackbar: MatSnackBar) { 
    this.form = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })    
  }

  ngOnInit(): void {
  }

  submit() {
    
    const email = this.form.value.email;
    const password = this.form.value.password;

    if(email == 'marcio' && password == '123') {
      this.fakeLoading();



    } else {
      this.error()
    }

  }

  error() {
    this._snackbar.open('Invalid user or password!', 'Error', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    })
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      
      this._router.navigate(['/dashboard'])

    }, 1500)
  }

}