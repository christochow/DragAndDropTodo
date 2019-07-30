import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  dropEvent(event: CdkDragDrop<Todo[]>) {
    this.todoService.updateList(event.previousIndex, event.currentIndex);
  }


  ngOnInit() {
  }

}
