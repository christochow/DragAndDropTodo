import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list: string[];
  constructor(public cookieService: CookieService) {
    this.list = [];
  }

  setTodo(val: string[]) {
    this.list = val;
  }

  addTodo(item: string): void {
    if(item !== ''){
      this.list.push(item);
    }
    this.cookieService.set('todoList', JSON.stringify(this.list));
  }

  getTodo(): string[] {
    return this.list;
  }
}
