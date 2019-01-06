import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(id): Observable<boolean> {
    // IRL: Call a ws, authenticate user, save user info or token in auth.service.
    return of(true).pipe(
      tap(val => {
        this.isLoggedIn = true;
        localStorage.setItem('currentUserToken', id);
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem('currentUserToken', null);
  }

  // public isSitter(): boolean {
  //   let isSitter = false;
  //   const user = this.getUserToken();
  //   const allowedGroups = ['Sitter', 'Baby']; // TODO: move to config file.
  //   if (user !== null && user !== undefined) {
  //     try {
  //       const userGroups: any = user.role;
  //       if (userGroups !== undefined && userGroups !== null && userGroups.length > 0) {
  //         try {
  //           userGroups.forEach((e: any) => {
  //             if (allowedGroups.indexOf(e) > -1) {
  //               isSitter = true;
  //             }
  //           });
  //         } catch (e) {
  //           if (allowedGroups.indexOf(userGroups) > -1) {
  //             isSitter = true;
  //           }
  //         }
  //       }
  //     } catch (e) {
  //       isSitter = false;
  //     }
  //   }
  //   return isSitter;
  // }

  // public getUserToken(): any {
  //   return localStorage.getItem('currentUserType');
  // }
}



