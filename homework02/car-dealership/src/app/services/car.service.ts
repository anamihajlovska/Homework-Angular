import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARS_DATA } from '../data/car.data';
import { Car } from '../types/car-dealership.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _cars = new BehaviorSubject(CARS_DATA);
  cars$ = this._cars.asObservable();

  constructor() {}

  createCar(
    carBrand: string,
    carModel: string,
    carPrice: number,
    carImages: string[],
    carDescription: string
  ) {
    const newCar: Car = {
      id: uuid(),
      description: carDescription,
      price: carPrice,
      images: carImages,
      model: carModel,
      brand: carBrand,
    };

    const cars = this._cars.value;
    this._cars.next([...cars, newCar]);
  }
  removeCar(carId: string) {
    const cars = this._cars.value;
    const updatedCars = cars.filter((car) => car.id !== carId);
    this._cars.next(updatedCars);
  }
}
