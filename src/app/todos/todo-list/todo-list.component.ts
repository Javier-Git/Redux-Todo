import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { filtrosValidos } from '../../redux/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: filtrosValidos;

  constructor(private store: Store<AppState>) { 
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.currentFilter = state.filtro;
    });
  }

  ngOnInit(): void {
    
  }

}
