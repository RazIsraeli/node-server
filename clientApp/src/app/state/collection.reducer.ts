import { createReducer, on } from '@ngrx/store';
import { CarActions } from './car.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  // on(CarActions.addCar, (state, { carId }) => {
  //   if (state.indexOf(carId) > -1) return state;

  //   return [...state, carId]
  // }),
  on(CarActions.removeCar, (state, { carId }) =>
    state.filter(id => id !== carId)
  )
);
