import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../types/car-dealership.interface';
import { FormsModule } from '@angular/forms';
import { CarsService } from '../../services/car.service';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css',
})
export class CreateCarComponent {
  constructor(private readonly carService: CarsService) {}

  brand: string = '';
  model: string = '';
  price: number = 0;
  images: [] = [];
  description: string = '';

  clearInputs() {
    this.brand = '';
    this.model = '';
    this.price = 0;
    this.images = [];
    this.description = '';
  }

  handleSubmit() {
    this.carService.createCar(
      this.brand,
      this.model,
      this.price,
      this.images,
      this.description
    );
    this.clearInputs();
  }
}
