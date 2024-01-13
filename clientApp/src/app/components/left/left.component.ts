import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
  @Input() cars?: Car[];
  @Input() users?: User[];
  @Output() selectedService: EventEmitter<string> = new EventEmitter<string>();

  onServiceSelected(serviceName: string): void {
    this.selectedService.emit(serviceName);
  }
}
