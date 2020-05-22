import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from '../redux/filtro/filtro.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtrosValidos): Todo[] {
    
    switch (filter) {
      case 'completados':
        return todos.filter( todo => {
          return todo.completado
        });
      case 'pendientes':
        return todos.filter( todo => {
          return !todo.completado
        });
      case 'todos':
        return todos;
    }
  }

}
