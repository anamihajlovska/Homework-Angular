import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreateCarComponent } from './components/create-car/create-car.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'create-car', component: CreateCarComponent },
];
