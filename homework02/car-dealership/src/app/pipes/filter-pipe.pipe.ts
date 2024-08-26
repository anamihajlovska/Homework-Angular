import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../types/car-dealership.interface';

@Pipe({
  name: 'filterByBrand',
  standalone: true,
})
export class FilterByBrand implements PipeTransform {
  transform(cars: Car[], searchBrand: string): Car[] {
    if (!searchBrand) {
      return cars;
    }
    return cars.filter((car) =>
      car.brand.toLowerCase().includes(searchBrand.toLowerCase().trim())
    );
  }
}
