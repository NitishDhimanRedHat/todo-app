import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/service.service'
import { Todo } from '../../models/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    })
  }

  changeTodoStatus(todo: Todo) {
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}
