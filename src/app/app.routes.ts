import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { TicketForm } from './pages/ticket-form/ticket-form';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'ticket-form', pathMatch: 'full' },
      { path: 'ticket-form', component: TicketForm }
    ]
  }
];