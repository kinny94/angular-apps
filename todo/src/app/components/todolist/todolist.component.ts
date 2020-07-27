import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './../../types';
import { TodoService } from './../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from '../create-todo/create-todo.component';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos$ ?: Observable<Todos[]>;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

  onCompleted(todo: Todos): void {
    return this.todoService.changeTodoStatus(todo);
  }

  createTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '250px',
    });
  }
}
