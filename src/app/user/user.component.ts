import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) public user!: User;
  @Input({ required: true }) public selected!: boolean;
  @Output() public selectEvent = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  public onSelectUser() {
    this.selectEvent.emit(this.user.id);
  }
}
