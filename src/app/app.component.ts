import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/service/theme.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    NavBarComponent,
    RouterOutlet, 
    MatButtonModule, 
    MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'url-shortener';
  constructor( public theme: ThemeService){
    this.theme.enableDark()
  }
  toggleTheme() {
    this.theme.toggle();
  }

}
