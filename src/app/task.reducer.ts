// task.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTask, updateTask, deleteTask } from './task.actions';
import { Task } from './models/task.model';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, task) => ({ ...state, tasks: [...state.tasks, task] })),
  on(updateTask, (state, updatedTask) => ({
    ...state,
    tasks: state.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }))
);
