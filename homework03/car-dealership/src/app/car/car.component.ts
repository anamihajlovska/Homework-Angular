import { Component, Input, input, output } from '@angular/core';
import { Car } from '../../types/car.interface';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatGridList, MatGridTile, CarCardComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  cars = input<Car[]>([]);
  breakpoint: number = 0;

  ngOnInit() {
    this.calculateBreakPoint();
  }

  calculateBreakPoint(innerWidth: number = window.innerWidth) {
    if (innerWidth <= 480) {
      this.breakpoint = 1;
    } else if (innerWidth <= 768) {
      this.breakpoint = 2;
    } else if (innerWidth <= 1024) {
      this.breakpoint = 3;
    } else if (innerWidth <= 1200) {
      this.breakpoint = 4;
    } else {
      this.breakpoint = 4;
    }
  }
  onResize(event: any) {
    this.calculateBreakPoint(event.target.innerWidth);
  }
}
