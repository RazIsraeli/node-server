import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Car } from '../models/car';

export const selectCars = createFeatureSelector<ReadonlyArray<Car>>('cars');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<number>>('collection');

export const selectCarCollection = createSelector(
  selectCars,
  selectCollectionState,
  (cars, collection) => {
    return collection.map((id) => cars.find((car) => car.id === id)!)
  }
)
