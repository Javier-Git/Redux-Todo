import { Todo } from '../models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';

export interface AppState{
    todos: Todo[]
    filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}