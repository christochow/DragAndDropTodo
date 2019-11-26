import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoForm = new FormGroup({
      input: new FormControl('', Validators.required)
    }
  );

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
  }

}
