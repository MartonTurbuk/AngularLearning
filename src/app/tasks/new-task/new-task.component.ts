import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  standalone: true,
  styleUrl: './new-task.component.css',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Input({ required: true }) public userId!: string;
  @Output() public close = new EventEmitter<void>();
  public enteredTitle = '';
  public enteredSummary = '';
  public enteredDate = '';
  private tasksService = inject(TasksService);

  public onCancel() {
    this.close.emit();
  }

  public onSubmit() {
    this.tasksService.addTask(
      {
        date: this.enteredDate,
        summary: this.enteredSummary,
        title: this.enteredTitle,
      },
      this.userId,
    );
    this.close.emit();
  }
}
