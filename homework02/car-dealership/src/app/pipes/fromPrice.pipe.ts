import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/car-dealership.interface';

@Pipe({
  name: 'fromPrice',
  standalone: true,
})
export class FromPricePipe implements PipeTransform {
  transform(cars: Car[], fromPrice: number | null): Car[] {
    if (fromPrice == null) {
      return cars;
    }
    return cars.filter((car) => car.price >= fromPrice);
  }
}
