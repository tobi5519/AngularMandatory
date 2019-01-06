import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';
import {ApiService} from '../../../Service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  users = {};
  selectControl: FormControl = new FormControl();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService) { } // dependency injections

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)] ],
        password: ['', Validators.required]
      }
    );
    this.users = this.apiService.getAllUsers().subscribe(
      (responseFromApi: any[]) => {this.users = responseFromApi.filter(x => x._APIId === 'SitMaBaby'); },
      err => {console.log(err); },
      () => {console.log('Done loading users!'); }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit(loginForm) {
    if (loginForm.valid) {
      for (let key in this.users) {
        if (this.f.username.value === this.users[key]['userName'] && this.f.password.value === this.users[key]['password']) {
          this.authService.login(this.users[key]['_id']).subscribe(result => {
            // Navigate based on a certain condition.
            this.router.navigate(['/home']);
          });
        }else {
          console.log('Wrong username or password!');
        }
      }
    } else {
      // promt user for not filling out fields.
    }

    console.log(loginForm);
  }

}
