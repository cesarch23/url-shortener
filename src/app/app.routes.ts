import { Routes } from '@angular/router';
import { Oauth2RedirectComponent } from './shared/components/oauth2-redirect/oauth2-redirect.component';
import { LandingComponent } from './landing/landing.component';
import { authGuard } from './core/guard/auth.guard';
import { redirectGuard } from './core/guard/redirect.guard';
import { Roles } from './core/model/model.interface';
import { roleGuard } from './core/guard/role.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RedirectHandlerComponent } from './redirect-handler/redirect-handler.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [redirectGuard],
        component: LandingComponent

    },
    {
        path:'r/:code',
        component: RedirectHandlerComponent
    },
    {
        path: 'oauth2/redirect',
        component: Oauth2RedirectComponent
    },
    {
        path: 'dashboard',// usuario autenticados
        canActivate: [authGuard,roleGuard],
        data:{
            roles:[Roles.USER]
        },
        loadChildren: ()=> import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
        
    },
    {
        path: 'admin',//administradores de la empressas
        canActivate: [authGuard,roleGuard],
        data: {
            roles:[Roles.ADMIN]
        },
        loadChildren: ()=> import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path:'404',
        component:NotFoundComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
    
];
