import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { DealershipInfoComponent } from '../dealership-info/dealership-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavigationComponent, DealershipInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
