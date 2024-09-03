import { Component, OnInit, signal } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Observable, finalize, tap, map } from 'rxjs';
import { Car } from '../../types/car.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CarCardComponent } from '../car-card/car-card.component';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarCardComponent,
    MatPaginatorModule,
    AsyncPipe,
    CommonModule,
    CarComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Observable<Car[]> = new Observable<Car[]>();
  isLoading = signal<boolean>(false);
  total = signal(0);
  page = signal(0);
  pageSize = signal(0);

  constructor(private readonly carService: CarsService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.isLoading.set(true);
    this.cars = this.carService.getCars().pipe(
      tap((response) => {
        this.total.set(response.total);
        this.isLoading.set(false);
      }),
      map((response) => response.payload),
      finalize(() => this.isLoading.set(false))
    );
  }
}
