import { Component, Input } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  imports: [TaskComponent, NewTaskComponent],
  selector: 'app-tasks',
  standalone: true,
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) public userId!: string;
  @Input({ required: true }) public name!: string;
  public isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  public onStartAddTask() {
    this.isAddingTask = true;
  }

  public onCloseAddTask() {
    this.isAddingTask = false;
  }
}
