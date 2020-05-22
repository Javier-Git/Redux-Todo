import { createReducer, on } from '@ngrx/store';
import { crear, editar, editarText, borrar, toggleAll, clearComplete } from './todo.actions';
import { Todo } from '../models/todo.model';
 
export const initialState: Todo[] = [
  new Todo("Aprender React!"),
  new Todo('Salvar el mundo!'),
  new Todo('Tender la cama!')
];
 
const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(clearComplete, (state) => {
    return state.filter(todo =>{
      return !todo.completado
    })
  }),
  on(editar, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
    })
  }),
  on(toggleAll, (state, {toggle}) => {
    return state.map(todo => {
        return {
          ...todo,
          completado: toggle
        }
    })
  }),
  on(editarText, (state, {texto, id}) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }
    })
  }),
  on(borrar, (state, {id}) => {
    return state.filter(todo => {
      return todo.id !== id;
    })
  }),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}