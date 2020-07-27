import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TODO_STATUS, Todos } from './../types';

const TODOS: Todos[] = [
  {
    name: 'Todo App 1',
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  },
  {
    name: 'Todo App 2',
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  },
  {
    name: 'Todo App 3',
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  },
  {
    name: 'Todo App 4',
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  },
  {
    name: 'Todo App 5' ,
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  },
  {
    name: 'Todo App 6',
    title: 'Create a Todo App',
    status: TODO_STATUS.Todo,
    createdAt: new Date(),
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosSubject: BehaviorSubject<Todos[]> = new BehaviorSubject<Todos[]>(TODOS);
  todos$: Observable<Todos[]> = this.todosSubject.asObservable();

  constructor() { }

  getTodos(): Observable<Todos[]> {
    return this.todosSubject.pipe(
      map((todos: Todos[]) => todos.filter((todo) => todo.status == TODO_STATUS.Todo)),
    );
  }

  getCompletedTodos(): Observable<Todos[]> {
    return this.todosSubject.pipe(
      map((todos: Todos[]) => todos.filter((todo) => todo.status == TODO_STATUS.Completed)),
    );
  }

  changeTodoStatus(todo: Todos): void {
    const newTodos = this.todosSubject.getValue();
    newTodos.forEach((currentTodo: Todos) => {
      if (currentTodo.name === todo.name) {
        currentTodo.status === TODO_STATUS.Todo ? currentTodo.status = TODO_STATUS.Completed : currentTodo.status = TODO_STATUS.Todo;
      }
    });
    this.todosSubject.next(newTodos);
  }
}
