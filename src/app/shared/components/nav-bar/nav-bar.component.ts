import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButton, MatButtonModule } from "@angular/material/button";
import { AuthService } from '../../../core/service/auth.service';
import { ThemeService } from '../../../core/service/theme.service';

@Component({
  selector: 'app-nav-bar',
  imports: [
    MatIconModule,
    MatButtonModule
],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  private authService = inject(AuthService);
  private themeService = inject(ThemeService);

  loginWithGoogle():void{
    this.authService.loginWithGoogle();

  }
    toggleTheme() {
    this.themeService.toggle();
  }
  isDark(){
    return this.themeService.isDark();
  }

}
