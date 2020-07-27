import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos, TODO_STATUS } from 'src/app/types';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  title ?: string;
  name ?: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  createTodo(): void {
    if (!this.title || !this.name) {
      return;
    } else {
      const newTodo: Todos = {
        name: this.name,
        title: this.title,
        status: TODO_STATUS.Todo,
        createdAt: new Date(),
      };

      this.todoService.createNewTodo(newTodo);
    }
  }

}
