import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@Component({
  imports: [HeaderComponent, UserComponent, TaskComponent, TasksComponent],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public users = DUMMY_USERS;
  public selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  public onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
