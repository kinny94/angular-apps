import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TODO_STATUS, Todos } from './../types';
import { AngularFirestore } from '@angular/fire/firestore';

const TODOS: Todos[] = [
  {
    name: 'Todo App 1',
    title: 'Drink lots of water',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  },
  {
    name: 'Todo App 2',
    title: 'Create a Todo Application',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  },
  {
    name: 'Todo App 3',
    title: 'Solve Algorithms Questions',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  },
  {
    name: 'Todo App 4',
    title: 'Do Something innovative',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  },
  {
    name: 'Todo App 5' ,
    title: 'Play Counter Strike',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  },
  {
    name: 'Todo App 6',
    title: 'Clear Interview',
    status: TODO_STATUS.Todo,
    createdAt: new Date().getDate(),
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosSubject: BehaviorSubject<Todos[]> = new BehaviorSubject<Todos[]>(TODOS);
  todos$: Observable<Todos[]> = this.todosSubject.asObservable();

  constructor(firestore: AngularFirestore) { 
    firestore.collection('todos').valueChanges().subscribe(console.log);
  }

  getTodos(): Observable<Todos[]> {
    return this.todosSubject.pipe(
      map((todos: Todos[]) => todos.filter((todo) => todo.status === TODO_STATUS.Todo)),
    );
  }

  getCompletedTodos(): Observable<Todos[]> {
    return this.todosSubject.pipe(
      map((todos: Todos[]) => todos.filter((todo) => todo.status === TODO_STATUS.Completed)),
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

  createNewTodo(newTodo: Todos): void {
    const currentTodos = this.todosSubject.getValue();
    this.todosSubject.next([...currentTodos, newTodo]);
  }
}
