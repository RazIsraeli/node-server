import { createActionGroup, props } from '@ngrx/store';
import { Car } from '../models/car';

export const CarActions = createActionGroup({
  source: 'Cars',
  events: {
    'Add Car': props<{ carId: number }>(),
    'Remove Car': props<{ carId: number }>()
  }
});

export const carApiActions = createActionGroup({
  source: 'Cars Api',
  events: {
    'Retrieved Cars list': props<{ cars: ReadonlyArray<Car> }>(),
  }
})
