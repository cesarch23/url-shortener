import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../../core/service/auth.service';

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
  private authService = inject(AuthService);

  logout(){
    this.authService.logout();
  }

}
