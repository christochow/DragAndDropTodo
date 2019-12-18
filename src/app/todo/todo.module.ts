import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoInputComponent} from './todo-input/todo-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieLawModule} from 'angular2-cookie-law';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TodoComponent, TodolistComponent, TodoInputComponent],
  exports: [TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    CookieLawModule,
    RouterModule
  ]
})
export class TodoModule { }
