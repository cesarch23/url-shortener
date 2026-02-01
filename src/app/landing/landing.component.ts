import { Component } from '@angular/core';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
 
@Component({
  selector: 'app-landing',
  imports: [
    NavBarComponent,
    HeroComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
