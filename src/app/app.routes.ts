import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: ()=> import('./modules/home/home.routes').then(m => m.routes)
    },
    // {
    //     path: 'auth',
    //     loadChildren: ()=> import('./modules/auth/auth.routes').then(m => m.routes)
    // },
    // {
    //     path: '**',
    //     loadComponent: ()=> import('./modules/common/error/error-page.component').then(c => c.ErrorPageComponent)
    // }
];

