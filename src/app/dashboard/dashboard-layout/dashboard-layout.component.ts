import { Component } from "@angular/core";
import { HomeComponent } from "../pages/home/home.component";
import { DashboardNavBarComponent } from "../component/dashboard-nav-bar/dashboard-nav-bar.component";
import { RouterOutlet } from "@angular/router";
import { DashboardSidebarComponent } from "../component/dashboard-sidebar/dashboard-sidebar.component";

@Component({
    selector: 'dashboard-layout',
    imports: [
        RouterOutlet,
        DashboardNavBarComponent,
        DashboardSidebarComponent,

    ],
    templateUrl: './dashboard-layout.component.html',
    styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

}