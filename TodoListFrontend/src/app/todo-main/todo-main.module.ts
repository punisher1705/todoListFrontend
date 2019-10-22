import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

import { RouterModule, ROUTES } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [AllTodoComponent, CreateTodoComponent, EditTodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'allTodo', component: AllTodoComponent },
      { path: 'createTodo', component: CreateTodoComponent },
      { path: 'editTodo', component: EditTodoComponent },
    ]),
    DataTablesModule
  ]
})
export class TodoMainModule { }
