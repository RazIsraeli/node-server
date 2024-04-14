import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  _cars$: Subject<Car[]> = new Subject();
  cars$: Observable<Car[]> = this._cars$.asObservable();

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}cars`)
  }

  getCarById(carId: number): void {
    this.http.get<Car>(`${this.baseUrl}cars/${carId}`).subscribe();
  }

  deleteCar(carId: number): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}cars/deleteCar`, { carId: carId });
  }
}
