import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent {

  @Input() cars?: Car[];
  @Input() users?: User[];
  @Input() selectedUser?: User;
  @Output() onUserSelected: EventEmitter<number> = new EventEmitter<number>();


  onSelectUser(userId: number): void {
    this.onUserSelected.emit(userId);
  }

}
