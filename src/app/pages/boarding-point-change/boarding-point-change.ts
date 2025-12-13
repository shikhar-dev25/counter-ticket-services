import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';
import { TicketData, OtpData, BoardingStation } from '../../models/ticket.model';

@Component({
  selector: 'app-boarding-point-change',
  imports: [ReactiveFormsModule],
  templateUrl: './boarding-point-change.html',
  styleUrl: './boarding-point-change.css',
})
export class BoardingPointChange {
  isChanged = signal(false);
  newBoardingPoint = new FormControl('', Validators.required);
  isChecked = new FormControl(false);

  ticketData = signal<TicketData | null>(null);
  boardingStations = signal<BoardingStation[]>([]);
  isLoading = signal(true);

  constructor(
    private router: Router,
    public ticket: Ticket,
    public translate: Translation,
    private apiService: ApiService
  ) {
    this.loadData();
  }

  loadData() {
    const pnr = this.ticket.pnrNumber;

    // Fetch ticket data
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

    // Fetch boarding stations (you can create this method in API service)
    // For now, we'll use a simple approach
  }

  isSelected() {
    return this.newBoardingPoint.value !== "";
  }

  onSubmit() {
    if (!this.isChecked.value) {
      alert("Please select the ticket");
      return;
    }

    if (confirm(this.translate.translate('changeBoardingPoint') + '?')) {
      this.isChanged.set(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onPrint() {
    window.print();
  }

  onBack() {
    this.router.navigate(['/ticket-form']);
  }
}
