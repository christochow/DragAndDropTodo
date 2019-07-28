import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {TodoService} from './todo.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public cookieService: CookieService, public todoService: TodoService) {
    const cookieString = cookieService.get('todoList');
    console.log(cookieString !== '');
    if (isNotNullOrUndefined(cookieString) && cookieString !== ''){
      this.todoService.setTodo(JSON.parse(cookieString));
    }
  }

  ngOnInit() {
  }

}
