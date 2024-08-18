import { Component, OnInit, signal } from '@angular/core';
import { CarsService } from '../../services/car.service';
import { Car } from '../../types/car-dealership.interface';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarCardComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars = signal<Car[]>([]);
  constructor(private readonly carService: CarsService) {}

  ngOnInit() {
    this.carService.cars$.subscribe((car) => {
      this.cars.set(car);
    });
  }
}
