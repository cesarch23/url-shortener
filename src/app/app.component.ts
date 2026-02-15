import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/service/theme.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [
    
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
     
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'url-shortener';
  constructor( private theme: ThemeService){
    this.theme.enableDark()
  }
  

}
