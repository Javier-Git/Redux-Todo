import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { toggleAll } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  checkAll: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkAll = new FormControl(false);
  }

  toggleAll(){
    this.checkAll.setValue(!this.checkAll.value);
    this.store.dispatch(toggleAll({toggle: this.checkAll.value}));
  }

}
