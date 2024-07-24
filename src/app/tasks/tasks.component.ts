import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  imports: [TaskComponent],
  selector: 'app-tasks',
  standalone: true,
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) public userId!: string;
  @Input({ required: true }) public name!: string;
  public tasks = [
    {
      dueDate: '2025-12-31',
      id: 't1',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      title: 'Master Angular',
      userId: 'u1',
    },
    {
      dueDate: '2024-05-31',
      id: 't2',
      summary: 'Build a first prototype of the online shop website',
      title: 'Build first prototype',
      userId: 'u3',
    },
    {
      dueDate: '2024-06-15',
      id: 't3',
      summary: 'Prepare and describe an issue template which will help with project management',
      title: 'Prepare issue template',
      userId: 'u3',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
