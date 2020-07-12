import { Observable } from 'rxjs';
import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hasTodo$: Observable<boolean>;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.fetchFromLocalStorage();
    this.hasTodo$ = this.todoService.lenght$.pipe(map((length) => length > 0));
  }
}
