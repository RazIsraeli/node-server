//! ACTIONS in ngrx are used to express unique events that happen throughout the application. Whether it's user interaction with the app,
//! or external interaction throught network requests, device APIs, backend APIs, etc.

import { createActionGroup, props } from '@ngrx/store';
import { Car } from '../models/car';

export const CarActions = createActionGroup({
  source: 'Cars', //! "source" is used to provide context where the event came from (backend api, web app, external api, etc...)
  events: {
    'Add Car': props<{ carId: number }>(),
    'Remove Car': props<{ carId: number }>()
  }
});

export const carApiActions = createActionGroup({
  source: 'Cars Api',
  events: {
    'Get All Cars': props<{ cars: ReadonlyArray<Car> }>(),
  }
})
