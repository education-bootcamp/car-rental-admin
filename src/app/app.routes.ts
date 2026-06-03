import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page').then((e) => e.HomePage),
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((e) => e.Auth),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((e) => e.Dashboard),
  },
  { path: '**', component: NotFoundPage },
];
