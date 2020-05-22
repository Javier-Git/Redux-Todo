import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Crear] todo', props<{texto: string}>());
export const editar = createAction('[Editar] todo', props<{id: number}>());
export const editarText = createAction('[EditarText] todo', props<{texto: string, id: number}>());
export const borrar = createAction('[Borrar] todo', props<{id: number}>());
export const toggleAll = createAction('[Check All] todo', props<{toggle: boolean}>());
export const clearComplete = createAction('[Clear Complete] todo');