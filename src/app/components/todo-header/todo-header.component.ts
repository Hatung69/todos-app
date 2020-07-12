import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleAll() {
    this.todoService.toggleAll();
  }
}
