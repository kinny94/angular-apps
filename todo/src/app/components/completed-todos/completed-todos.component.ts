import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {

  completedTodos$?: Observable<Todos[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.completedTodos$ = this.todoService.getCompletedTodos();
  }

  moveToTodo(todo: Todos): void {
    this.todoService.changeTodoStatus(todo);
  }

}
