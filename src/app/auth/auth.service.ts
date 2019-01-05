import { Injectable } from '@angular/core';
import {delay, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    // IRL: Call a ws, authenticate user, save user info or token in auth.service.
    return of(true).pipe(
      tap(val => {
        localStorage.setItem('isLoggedIn', 'true');
        console.log(localStorage.getItem('isLoggedIn'));
      })
    );
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }
}

