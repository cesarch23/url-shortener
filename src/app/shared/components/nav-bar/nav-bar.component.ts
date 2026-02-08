import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from "@angular/material/button";
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [
    MatIconModule,
    MatButton
],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  private authService = inject(AuthService);

  loginWithGoogle():void{
    this.authService.loginWithGoogle();

  }

}
