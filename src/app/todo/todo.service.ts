import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list: Todo[];
  constructor(public cookieService: CookieService) {
    this.list = [];
  }

  setTodo(val: Todo[]) {
    this.list = val;
  }

  addTodo(item: string): void {
    if (item !== '') {
      this.list.push(new Todo(item));
      this.saveList();
    }
  }

  getTodo(): Todo[] {
    return this.list;
  }

  removeItem(index) {
    this.list.splice(index, 1);
    this.saveList();
  }

  updateList(oldIndex, newIndex){
    this.list.splice(newIndex, 0, this.list.splice(oldIndex, 1)[0]);
  }

  private saveList(){
    this.cookieService.set('todoList', JSON.stringify(this.list));
  }

}
