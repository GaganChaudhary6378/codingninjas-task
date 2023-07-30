// edit-task.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
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
    // Handle form submission, update the task, and dispatch the 'updateTask' action.
  }
}
