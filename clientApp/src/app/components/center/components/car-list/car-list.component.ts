import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars?: Car[];
  @Output() carSelected: EventEmitter<number> = new EventEmitter<number>();

  onCarSelected(carId: number): void {
    this.carSelected.emit(carId);
  }
}
