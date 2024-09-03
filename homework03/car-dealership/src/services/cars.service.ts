import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../types/car.interface';
import { enviroment } from '../enviroment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from '../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private carsPath = `${enviroment.apiURL}/cars`;

  constructor(private readonly http: HttpClient) {}

  getCars(): Observable<Response<Car[]>> {
    return this.http.get<Response<Car[]>>(this.carsPath).pipe(
      catchError((error) => {
        console.log(error);
        return of({ payload: [], total: 0 });
      })
    );
  }
}
