import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Todos } from './../../types';
import { TodoService } from './../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos$ ?: Observable<Todos[]>;
  dataSource$ ?: Observable<Todos[]>;
  filterControl = new FormControl();

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    const filterChange = this.filterControl.valueChanges.pipe(
      startWith(''),
    );
    this.todos$ = this.todoService.getTodos();
    this.dataSource$ = combineLatest([this.todos$, filterChange]).pipe(
      map(([todos, filter]) => {
        return this.filterTodoList(todos, filter);
      }),
    );
  }

  onCompleted(todo: Todos): void {
    return this.todoService.changeTodoStatus(todo);
  }

  createTodo(): void {
    const dialogRef = this.dialog.open(CreateTodoComponent, {
      width: '250px',
    });
  }

  filterTodoList(todos: Todos[], filterBy: string): Todos[] {
    return todos.filter((currentTodo: Todos) => currentTodo.title.toLowerCase().includes(filterBy.toLowerCase()));
  }
}
