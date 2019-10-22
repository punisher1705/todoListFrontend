import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// routing
import { RouterModule, ROUTES } from '@angular/router';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './users/login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DataTablesModule } from 'angular-datatables';
import { TodoMainModule } from './todo-main/todo-main.module';
import { AllTodoComponent } from './todo-main/all-todo/all-todo.component';
import { CreateTodoComponent } from './todo-main/create-todo/create-todo.component';
import { EditTodoComponent } from './todo-main/edit-todo/edit-todo.component';


//toast message 
// import {}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    UsersModule,
    DashboardModule,
    TodoMainModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }

    ]),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
