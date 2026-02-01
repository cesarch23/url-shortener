import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'dashboard-nav-bar',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    

  ],
  templateUrl: './dashboard-nav-bar.component.html',
  styleUrl: './dashboard-nav-bar.component.scss'
})
export class DashboardNavBarComponent {

}
