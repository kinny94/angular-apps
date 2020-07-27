import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './../../types';
import { TodoService } from './../../services/todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos$ ?: Observable<Todos[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  onCompleted(todo: Todos): void {
    return this.todoService.changeTodoStatus(todo);
  }
}
