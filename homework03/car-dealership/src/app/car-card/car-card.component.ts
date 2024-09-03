import { Component, Input, input, output } from '@angular/core';
import { Car } from '../../types/car.interface';
import { CommonModule } from '@angular/common';
import { CarsService } from '../../services/cars.service';

import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIconModule,
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  car = input.required<Car>();
  constructor(private readonly carService: CarsService) {}
  ngOnInit() {}
}
