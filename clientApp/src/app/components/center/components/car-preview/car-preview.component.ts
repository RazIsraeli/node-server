import { Component, Input } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

import { Store } from '@ngrx/store';
import { CarActions, carApiActions } from 'src/app/state/car.actions';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss']
})
export class CarPreviewComponent {
  @Input() car?: Car;

  constructor(private carService: CarService, private store: Store) { }

  onDeleteCar(ev: Event, carId: number): void {
    ev.stopPropagation();
    this.carService.deleteCar(carId).subscribe((car) => {
      const carId = car.id;
      this.store.dispatch(CarActions.removeCar({ carId }))

      this.carService.getCars().subscribe((cars) => {
        this.store.dispatch(carApiActions.getAllCars({ cars }));
      })
    })
  }
}
