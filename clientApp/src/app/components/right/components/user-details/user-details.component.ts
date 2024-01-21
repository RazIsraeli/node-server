import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  private _user?: User;

  @Input() set user(val: User | undefined) {
    this._user = val;

    console.log('this._user has changed: ', this._user);
  }

  get user(): User | undefined {
    return this._user;
  }
}
