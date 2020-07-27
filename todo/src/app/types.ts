export enum TODO_STATUS {
  Todo= 'todo',
  Completed= 'completed'
}

export interface Todos {
  name: string;
  title: string;
  status: TODO_STATUS;
  createdAt: Date;
}