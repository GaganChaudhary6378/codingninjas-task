// task.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { TaskService } from './task.service';
import { addTask, updateTask, deleteTask } from './task.actions';

@Injectable()
export class TaskEffects {
  // Implement your side effects, e.g., data persistence to local storage, and adding history logs.
}
