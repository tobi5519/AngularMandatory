import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   let  isSitter: boolean = this.authService.isSitter();
  //   if (!isSitter) {
  //     this.router.navigate(['/login']);
  //   }
  //   return isSitter;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('AuthGuard siger at isLoggedIn er: ' + localStorage.getItem('isLoggedIn'));
    console.log('AuthGuard siger at currentUserToken er: ' + localStorage.getItem('currentUserToken'));

    if (localStorage.getItem('isLoggedIn')) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
