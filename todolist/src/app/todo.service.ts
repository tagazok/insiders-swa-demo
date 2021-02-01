import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodoList() {
    try {
      return fetch('api/GetTodoList');
    } catch (error) {
      throw new Error(error);
    } 
  }
}
