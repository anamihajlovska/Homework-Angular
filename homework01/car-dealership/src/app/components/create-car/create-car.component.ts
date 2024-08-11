import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../types/car-dealership.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-car.component.html',
  styleUrl: './create-car.component.css',
})
export class CreateCarComponent {
  newCar: Car = {
    id: '',
    price: 0,
    brand: '',
    model: '',
    images: [],
    description: '',
  };

  @Output() carCreated = new EventEmitter<Car>();

  createCar() {
    if (this.newCar) {
      this.carCreated.emit(this.newCar);
      console.log(this.newCar);
    }
  }
}
