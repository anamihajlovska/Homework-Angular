import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DealershipInfoComponent } from './components/dealership-info/dealership-info.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { Car } from './types/car-dealership.interface';
import { CommonModule } from '@angular/common';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { FormsModule } from '@angular/forms';
import { CarsComponent } from './components/cars/cars.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarCardComponent,
    CommonModule,
    CreateCarComponent,
    FormsModule,
    CarsComponent,
    CarsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'car-dealership';

  // addNewCar(newCar: Car) {
  //   this.cars.push(newCar);
  // }
}
