import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '01',
        title: 'C++',
        isComplete: true,
        date: new Date()
      },
      {
        id: '02',
        title: 'JAVA',
        isComplete: true,
        date: new Date()
      },
      {
        id: '03',
        title: 'PYTHON',
        isComplete: false,
        date: new Date()
      }
    ]
  }

  getTodos() {
    return of(this.todos);
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map(singleTodo => {
      if(singleTodo.id == todo.id) {
        singleTodo.isComplete = !singleTodo.isComplete;
      }
    })
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(currentObj => currentObj.id === todo.id)
    this.todos.splice(index, 1);
  }
}
