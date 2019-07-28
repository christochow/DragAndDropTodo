import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoInputComponent} from './todo-input/todo-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TodoComponent, TodolistComponent, TodoInputComponent],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
