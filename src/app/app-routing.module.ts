import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './Components/Login/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {BabyHomeComponent} from './Components/Baby/baby-home/baby-home.component';
import {SitterHomeComponent} from './Components/Sitter/sitter-home/sitter-home.component';
import {SitterListComponent} from './Components/Sitter/sitter-list/sitter-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'baby', component: BabyHomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'sitters', component: SitterListComponent }
    ]
  },
  {path: 'sitter', component: SitterHomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
