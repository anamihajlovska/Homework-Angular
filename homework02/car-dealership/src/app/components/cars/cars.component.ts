import { Component, OnInit, signal } from '@angular/core';
import { CarsService } from '../../services/car.service';
import { Car } from '../../types/car-dealership.interface';
import { CarCardComponent } from '../car-card/car-card.component';
import { FormsModule } from '@angular/forms';
import { FilterByBrand } from '../../pipes/filter-pipe.pipe';
import { CommonModule } from '@angular/common';
import { ToPricePipe } from '../../pipes/toPrice.pipe';
import { FromPricePipe } from '../../pipes/fromPrice.pipe';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarCardComponent,
    FormsModule,
    FilterByBrand,
    CommonModule,
    ToPricePipe,
    FromPricePipe,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars = signal<Car[]>([]);
  searchBrand = signal<string>('');
  fromPrice = signal<number | null>(null);
  toPrice = signal<number | null>(null);

  constructor(private readonly carService: CarsService) {}

  ngOnInit() {
    this.carService.cars$.subscribe((car) => {
      this.cars.set(car);
    });
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.searchBrand.set(value);
    console.log(value);
  }

  handlePriceChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);

    if (target.name === 'fromPrice') {
      this.fromPrice.set(value || null);
    } else if (target.name === 'toPrice') {
      this.toPrice.set(value || null);
    }
    console.log('range:', this.fromPrice(), this.toPrice());
  }
}
