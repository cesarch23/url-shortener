import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";

export const DASHBOARD_ROUTES:Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'links',
                loadComponent: () => import('./pages/links/links.component').then(m => m.LinksComponent)
            },
            {
                path: 'analytics',
                loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent)
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]

    }
]