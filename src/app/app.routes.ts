import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/process/home', pathMatch: 'full' },
  {
    path: 'process',
    loadComponent: () => import('./pages/home-context/home-context').then((e) => e.HomeContext),
    children:[
  { path: '', redirectTo: '/process/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page').then((e) => e.HomePage),
  },
   {
    path: 'fleet',
    loadComponent: () => import('./pages/fleet/fleet').then((e) => e.Fleet),
  },
   {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((e) => e.About),
  },

   {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((e) => e.Contact),
  },
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((e) => e.Auth),
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/inner-pages/login-page/login-page').then((e) => e.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth/inner-pages/register-page/register-page').then(
            (e) => e.RegisterPage,
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((e) => e.Dashboard),
  },
  { path: '**', component: NotFoundPage },
];
