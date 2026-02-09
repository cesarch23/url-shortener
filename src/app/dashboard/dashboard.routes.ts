import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { authGuard } from "../core/guard/auth.guard";
import { Roles } from "../core/model/model.interface";
import { roleGuard } from "../core/guard/role.guard";


export const DASHBOARD_ROUTES:Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: 'home',
                canActivate: [authGuard,roleGuard],
                data: {
                    roles:[Roles.USER]
                },
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'links',
                canActivate: [authGuard,roleGuard],
                data: {
                    roles:[Roles.USER]
                },
                loadComponent: () => import('./pages/links/links.component').then(m => m.LinksComponent)
            },
            {
                path: 'analytics',
                canActivate: [authGuard,roleGuard],
                data: {
                    roles:[Roles.USER]
                },
                loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent)
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ]

    }
]