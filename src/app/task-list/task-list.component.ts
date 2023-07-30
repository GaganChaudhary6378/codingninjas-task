// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks$ = this.taskService.getAllTasks();
  }

  // Add your logic for sorting and filtering tasks here.
}
