import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';
import { TicketData } from '../../models/ticket.model';

@Component({
  selector: 'app-passenger-details',
  imports: [ReactiveFormsModule],
  templateUrl: './passenger-details.html',
  styleUrl: './passenger-details.css',
})
export class PassengerDetails {
  isCancelled = signal(false);
  passenger1selected = new FormControl(false);
  passenger2selected = new FormControl(false);
  passenger1cancelled = signal(false);
  passenger2cancelled = signal(false);


  ticketData = signal<TicketData | null>(null);
  isLoading = signal(true);

  constructor(
    private router: Router,
    public ticket: Ticket,
    public translate: Translation,
    private apiService: ApiService
  ) {
    this.loadTicketData();
  }

  loadTicketData() {
    const pnr = this.ticket.pnrNumber;

    this.apiService.getTicketByPnr(pnr).subscribe({
      next: (tickets) => {
        if (tickets.length > 0) {
          this.ticketData.set(tickets[0]);
        }
        this.isLoading.set(false);
      },
      error: () => {
        alert("Unable to load ticket details.");
        this.isLoading.set(false);
      }
    });
  }

  onCancelTicket() {
    if (!this.passenger1selected.value && !this.passenger2selected.value) {
      alert(this.translate.translate('alertText'));
      return;
    }

    if (confirm(this.translate.translate('cancelTicket') + "?")) {
      if (this.passenger1selected.value) {
        this.passenger1cancelled.set(true);
      }
      if (this.passenger2selected.value) {
        this.passenger2cancelled.set(true);
      }

      if (this.passenger1cancelled() && this.passenger2cancelled()) {
        this.isCancelled.set(true);
      }
    }
  }

  onPrint() {
    window.print();
  }

  onBack() {
    this.router.navigate(['/ticket-form']);
  }
}
