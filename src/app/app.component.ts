import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'to-do' | 'in-progress' | 'completed';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  taskForm: FormGroup;
  tasks: Task[] = [];
  sortBy: string = 'dueDate';
  filterByStatus: string = 'all';
  displayedColumns: string[] = ['title', 'description', 'dueDate', 'priority', 'status', 'actions'];
  filteredTasks!: MatTableDataSource<Task>;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['to-do', Validators.required]
    });
  }

  ngOnInit() {
    this.filteredTasks = new MatTableDataSource(this.getFilteredTasks());
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = {
        id: Date.now(), // You can use a proper ID generation method here.
        ...this.taskForm.value
      };
      this.tasks.push(task);
      this.filteredTasks.data = this.getFilteredTasks();
      this.taskForm.reset();
    }
  }

  editTask(task: Task) {
    this.taskForm.setValue(task);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.filteredTasks.data = this.getFilteredTasks();
  }

  getFilteredTasks(): Task[] {
    if (this.filterByStatus === 'all') {
      return this.tasks;
    } else {
      return this.tasks.filter(t => t.status === this.filterByStatus);
    }
  }

  applyFilterByStatus(event: MatSelectChange) {
    this.filterByStatus = event.value;
    this.filteredTasks.data = this.getFilteredTasks();
  }

  applySortBy(event: MatSelectChange) {
    this.sortBy = event.value;
    this.filteredTasks.data = this.getFilteredTasks();
  }
}
