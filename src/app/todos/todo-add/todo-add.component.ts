import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { crear } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;
  constructor(private store: Store<AppState>) { 
    this.textInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.textInput.invalid){return;}
    this.store.dispatch(crear({texto: this.textInput.value}));
    this.textInput.reset();
  }
}
