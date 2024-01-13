import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users?: User[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter<number>();

  onUserSelected(userId: number): void {
    this.userSelected.emit(userId);
  }

}
