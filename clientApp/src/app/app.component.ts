import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { Car } from './models/car';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clientApp';
  cars?: Car[];
  users?: User[];
  selectedUser?: User;
  selectedCar?: Car;
  selectedService?: string;
  isFetchingUser: boolean = false;
  isFetchingCar: boolean = false;

  constructor(private carService: CarService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadCars();
    this.loadUsers();
  }

  loadCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    })
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    })
  }

  selectUser(userId: number): void {
    this.isFetchingUser = true;
    this.userService.getUserById(userId).subscribe((user) => {
      this.selectedUser = user;
      this.isFetchingUser = false;
    });
  }

  selectCar(carId: number): void {
    this.isFetchingCar = true;
    this.carService.getCarById(carId).subscribe((car) => {
      this.selectedCar = car;
      this.isFetchingCar = false;
    })
  }

  selectService(serviceName: string): void {
    this.selectedService = serviceName;
  }
}
