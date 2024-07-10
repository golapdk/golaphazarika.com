import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path: 'home',
        canActivate: [],
        loadComponent: ()=> import('./home.component').then(c => c.HomeComponent)
    }
];
