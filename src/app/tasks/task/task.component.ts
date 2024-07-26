import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { type ITask } from './task.model';

@Component({
  imports: [CardComponent, DatePipe],
  selector: 'app-task',
  standalone: true,
  styleUrl: './task.component.css',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input({ required: true }) public task!: ITask;
  private tasksService = inject(TasksService);

  public onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
