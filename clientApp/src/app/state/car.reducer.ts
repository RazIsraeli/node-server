//! REDUCERS in ngrx are used to handle transitions from one state to the next state in the application.
//! Reducers take the current state and the latest action dispatched, and determine whether to return a new modified state or the original one.

import { createReducer, on } from '@ngrx/store';

import { carApiActions } from './car.actions';
import { Car } from '../models/car';

export const initialState: ReadonlyArray<Car> = [];

export const carReducer = createReducer(
  initialState,
  on(carApiActions.getAllCars, (_state, { cars }) => cars)
);
