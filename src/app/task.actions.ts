// task.actions.ts
import { createAction, props } from '@ngrx/store';
import { Task } from './models/task.model';
export const addTask = createAction('[Task] Add Task', props<Task>());
export const updateTask = createAction('[Task] Update Task', props<Task>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
