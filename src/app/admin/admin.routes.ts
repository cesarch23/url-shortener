import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layout/admin-layout.component";

export const ADMIN_ROUTES:Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/admin-home/admin-home.component').then(m => m.AdminHomeComponent)
            }
        ]
    }
]