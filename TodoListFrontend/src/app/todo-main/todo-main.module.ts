import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';



@NgModule({
  declarations: [AllTodoComponent, CreateTodoComponent, EditTodoComponent],
  imports: [
    CommonModule
  ]
})
export class TodoMainModule { }
