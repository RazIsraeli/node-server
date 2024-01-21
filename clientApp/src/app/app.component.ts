import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { Car } from './models/car';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { SseService } from './services/sse.service';

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

  constructor(private carService: CarService, private userService: UserService, private sseService: SseService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sseService.start();
    this.loadCars();
    this.loadUsers();

    this.sseService.message$.subscribe((data) => {
      if (data.type === 'users') {
        delete data.type;
        const parsedUsers: User[] = Object.values(data);
        this.users = parsedUsers;
        this.changeDetector.detectChanges();
        return;
      }

      if (data.type === 'user') {
        delete data.type;
        this.selectedUser = data;
        this.isFetchingUser = false;
        this.changeDetector.detectChanges();
        return;
      }

      if (data.type === 'cars') {
        delete data.type;
        const parsedCars: Car[] = Object.values(data);
        this.cars = parsedCars;
        this.changeDetector.detectChanges();
        this.changeDetector.detectChanges();
        return;
      }

      if (data.type === 'car') {
        delete data.type;
        this.selectedCar = data;
        this.isFetchingCar = false;
        this.changeDetector.detectChanges();
        return;
      }
    });
  }

  loadCars(): void {
    this.carService.getCars();
  }

  loadUsers(): void {
    this.userService.getUsers();
  }

  selectUser(userId: number): void {
    this.isFetchingUser = true;
    this.userService.getUserById(userId);
  }

  selectCar(carId: number): void {
    this.isFetchingCar = true;
    this.carService.getCarById(carId);
  }

  selectService(serviceName: string): void {
    this.selectedService = serviceName;
  }
}
