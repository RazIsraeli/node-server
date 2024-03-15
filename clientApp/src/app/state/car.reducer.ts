import { createReducer, on } from '@ngrx/store';

import { carApiActions } from './car.actions';
import { Car } from '../models/car';

export const initialState: ReadonlyArray<Car> = [];

export const carReducer = createReducer(
  initialState,
  on(carApiActions.retrievedCarsList, (_state, { cars }) => cars)
);
