import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';

@Component({
  selector: 'app-passenger-details',
  imports: [],
  templateUrl: './passenger-details.html',
  styleUrl: './passenger-details.css',
})
export class PassengerDetails {
  constructor (
    private router: Router,
    public ticket: Ticket
  ) {}

  onSubmit() {
    alert("Do you want to process the Cancellation?")
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
