import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { TicketForm } from './pages/ticket-form/ticket-form';
import { OtpVerification } from './pages/otp-verification/otp-verification';
import { PassengerDetails } from './pages/passenger-details/passenger-details';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'ticket-form', pathMatch: 'full' },
      { path: 'ticket-form', component: TicketForm },
      { path: 'otp', component: OtpVerification},
      { path: 'passenger-details', component: PassengerDetails}
    ]
  }
];