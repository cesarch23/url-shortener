import { Routes } from '@angular/router';
import { Oauth2RedirectComponent } from './shared/components/oauth2-redirect/oauth2-redirect.component';
import { LandingComponent } from './landing/landing.component';
import { authGuard } from './core/guard/auth.guard';
import { redirectGuard } from './core/guard/redirect.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [redirectGuard],
        component: LandingComponent

    },
    {
        path: 'oauth2/redirect',
        component: Oauth2RedirectComponent
    },
    {
        path: 'dashboard',// usuario autenticados
        canActivate: [authGuard],
        loadChildren: ()=> import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
        
    },
    {
        path: 'admin',//administradores de la empressas
        canActivate: [authGuard],
        loadChildren: ()=> import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: '**',
        redirectTo: ''
    }
    
];
