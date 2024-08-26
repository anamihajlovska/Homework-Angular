import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/car-dealership.interface';

@Pipe({
  name: 'toPrice',
  standalone: true,
})
export class ToPricePipe implements PipeTransform {
  transform(cars: Car[], toPrice: number | null): Car[] {
    if (toPrice == null) {
      return cars;
    }
    return cars.filter((car) => car.price <= toPrice);
  }
}
