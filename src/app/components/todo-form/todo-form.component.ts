import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { v4 as uuidv4 } from 'uuid';
import { TodoService } from 'src/app/services/service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }

  onSubmit() {
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.newTitle,
      isComplete: false,
      date: new Date()
    }

    this.todoService.addTodos(newTodo);
    this.newTitle = '';
  }

}
