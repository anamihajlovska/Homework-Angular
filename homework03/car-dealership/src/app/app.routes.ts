import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cars',
    loadComponent: () =>
      import('./cars/cars.component').then((c) => c.CarsComponent),
  },
  { path: 'create-car', component: CreateCarComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
