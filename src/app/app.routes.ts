import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'become-mentor',
    loadComponent: () => import('./pages/become-mentor/become-mentor.component').then(m => m.BecomeMentorComponent)
  },
  {
    path: 'get-mentor',
    loadComponent: () => import('./pages/get-mentor/get-mentor.component').then(m => m.GetMentorComponent)
  },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  // },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];