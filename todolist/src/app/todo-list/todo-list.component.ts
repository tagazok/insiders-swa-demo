import { Component, OnInit } from '@angular/core';
import { AuthSWAService } from '../auth-swa.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: any;
  constructor(private todoService: TodoService,
    public userService: AuthSWAService
    ) {}
 
  ngOnInit(): void {
    this.todoService.getTodoList().then((response) => response.json()).then(data =>{
       this.todos = data;
       console.log(data);
    });
  }

}
