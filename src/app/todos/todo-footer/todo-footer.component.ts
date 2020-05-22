import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.reducer';
import { setFiltro, filtrosValidos } from '../../redux/filtro/filtro.actions';
import { clearComplete } from '../../redux/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public currentFilter: filtrosValidos;
  public pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.currentFilter = state.filtro;
      this.pendientes = state.todos.filter(todo => {
        return !todo.completado
      }).length;
      
    })
  }

  changeFilter(activeFilter: filtrosValidos){
    this.store.dispatch( setFiltro({filtro: activeFilter}))
  }

  clear(){
    this.store.dispatch( clearComplete());
  }
}
