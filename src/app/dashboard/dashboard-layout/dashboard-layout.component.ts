import { Component } from "@angular/core";
import { HomeComponent } from "../pages/home/home.component";

@Component({
    selector: 'dashboard-layout',
    imports: [
        HomeComponent,
    ],
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}