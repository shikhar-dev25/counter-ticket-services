import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-boarding-point-change',
  imports: [],
  templateUrl: './boarding-point-change.html',
  styleUrl: './boarding-point-change.css',
})
export class BoardingPointChange {
  constructor (
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) {console.log('PNR:', this.ticket.pnrNumber);
  console.log('Train:', this.ticket.trainNumber);}

  onSubmit() {
    alert("Do you want to change the boarding point?")
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
