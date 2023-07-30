// add-task.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      dueDate: [''],
      priority: [''],
      status: [''],
    });
  }

  onSubmit() {
    // Handle form submission, create the task, and dispatch the 'addTask' action.
  }
}
