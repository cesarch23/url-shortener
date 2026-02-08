import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../core/service/auth.service';
@Component({
  selector: 'app-hero',
  imports: [
    MatButtonModule,
    RouterLink
],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  private authService = inject(AuthService)

  login(){
    this.authService.loginWithGoogle()
  }

}
