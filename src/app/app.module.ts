import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatGridListModule,
  MatInputModule, MatNativeDateModule, MatSelectModule, MatTabsModule, MatCardModule
} from '@angular/material';
import { LoginComponent } from './Components/Login/login/login.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BabyHomeComponent } from './Components/Baby/baby-home/baby-home.component';
import { HttpClientModule } from '@angular/common/http';
import { SitterHomeComponent } from './Components/Sitter/sitter-home/sitter-home.component';
import { SitterListComponent } from './Components/Sitter/sitter-list/sitter-list.component';

//Redux
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { rootReducer } from './store'; // Added this to get the root reducer



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BabyHomeComponent,
    SitterHomeComponent,
    SitterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule,
    NgReduxModule, NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTool: DevToolsExtension,
              private ngReduxRouter: NgReduxRouter, ) {

    this.ngRedux.configureStore(rootReducer, {}, [],
      [devTool.isEnabled() ? devTool.enhancer() : i => i ]);

    ngReduxRouter.initialize(/* args */);

  }
}
