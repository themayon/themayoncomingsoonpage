import { Routes } from '@angular/router';
import {
  aboutPage,
  contactPage,
  industriesPage,
  productsPage,
  servicesPage,
  technologyPage
} from './shared/data/site-content';

export const routes: Routes = [
  {
    path: '',
    title: 'The Mayon | AI-Powered Software Development Company',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about',
    title: aboutPage.title,
    data: { page: aboutPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: 'services',
    title: servicesPage.title,
    data: { page: servicesPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: 'products',
    title: productsPage.title,
    data: { page: productsPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: 'industries',
    title: industriesPage.title,
    data: { page: industriesPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: 'technology',
    title: technologyPage.title,
    data: { page: technologyPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: 'contact',
    title: contactPage.title,
    data: { page: contactPage },
    loadComponent: () => import('./features/content-page/content-page.component').then((m) => m.ContentPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

