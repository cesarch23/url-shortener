import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        //verificar autenticacion
        loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)

    },
    {
        path: 'dashboard',// usuario autenticados
        loadChildren: ()=> import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
        
    },
    {
        path: 'admin',//administradores de la empressas
        loadChildren: ()=> import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path: '**',
        redirectTo: ''
    }
    
];
