import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  imports: [FormsModule],
  templateUrl: './passenger-details.html',
  styleUrl: './passenger-details.css',
})
export class PassengerDetails {
  constructor (
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) {}

  isCancelled = signal(false);
  isChecked = false;

  onCancelTicket() {
    if(!this.isChecked){
      alert("Please select the ticket")
    } else {
      if (confirm(this.translate.translate('cancelTicket') + '?')) {
      this.isCancelled.set(true);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onPrint() {
    window.print();
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
