import { Injectable } from '@angular/core';
import { INewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
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

  constructor() {
      const tasks: string | null = localStorage.getItem('tasks');

      // tslint:disable-next-line:curly
      if (tasks && tasks.length > 0) {
        this.tasks = JSON.parse(tasks);
      }
  }

  public getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public addTask(taskData: INewTaskData, userID: string) {
    this.tasks.unshift({
      dueDate: taskData.date,
      id: new Date().getTime().toString(),
      summary: taskData.summary,
      title: taskData.title,
      userId: userID,
    });
    this.saveTasks();
  }

  public removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
