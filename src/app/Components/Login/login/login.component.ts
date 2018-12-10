import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { } // dependency injections

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)] ],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit(loginForm) {
    if (loginForm.valid) {
      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        this.router.navigate(['/home']);
      });
      // this.router.navigate(['home']);
    } else {
      // promt user for not filling out fields.
    }

    console.log(loginForm);
  }

}
