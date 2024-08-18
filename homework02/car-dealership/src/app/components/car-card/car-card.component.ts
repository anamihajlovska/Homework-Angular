import { Component, Input, input, output } from '@angular/core';
import { Car } from '../../types/car-dealership.interface';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  car = input.required<Car>();

  constructor(private readonly carService: CarsService) {}

  handleRemoveCar(id: string) {
    this.carService.removeCar(id);
  }
}
