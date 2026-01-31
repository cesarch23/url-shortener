import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from "@angular/material/button";
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

}
