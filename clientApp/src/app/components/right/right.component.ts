import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent {
  @Input() selectedUser?: User;
  @Input() selectedCar?: Car;
  @Input() isFetchingUser?: boolean;
  @Input() isFetchingCar?: boolean;
}
