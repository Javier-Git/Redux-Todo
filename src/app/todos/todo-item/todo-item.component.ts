import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Form, Validators } from '@angular/forms';
import { contadorReducer } from '../../../../../Redux-Angular/src/app/redux/reducers/contador-reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { editar, editarText, borrar } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('editInputText') inputFisico: ElementRef;

  editando: boolean;
  checkComplete: FormControl;
  txtEditar: FormControl;

  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.checkComplete =  new FormControl(this.todo.completado);
    this.txtEditar = new FormControl(this.todo.texto, Validators.required);
    this.editando = false;

    this.checkComplete.valueChanges.subscribe(value =>{
      this.store.dispatch(editar({id: this.todo.id}));
    });
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 0);
  }

  terminarEditar(){
    this.editando = false;

    if(this.txtEditar.invalid || this.txtEditar.value === this.todo.texto){
      this.txtEditar.setValue(this.todo.texto);
      return;
    }
    this.store.dispatch( editarText({texto: this.txtEditar.value, id: this.todo.id}));
  }

  borrar(){
    this.store.dispatch(borrar({id: this.todo.id}));
  }

}
