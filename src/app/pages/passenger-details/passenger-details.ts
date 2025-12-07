import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  imports: [],
  templateUrl: './passenger-details.html',
  styleUrl: './passenger-details.css',
})
export class PassengerDetails {
  constructor (private router: Router) {}

  onSubmit() {
    alert("Do you want to process the Cancellation?")
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
