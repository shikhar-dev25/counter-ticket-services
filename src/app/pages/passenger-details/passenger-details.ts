import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  imports: [ReactiveFormsModule],
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
  passenger1selected = new FormControl(false);
  passenger2selected = new FormControl(false);
  passenger1cancelled = signal(false);
  passenger2cancelled = signal(false);

  onCancelTicket() {
    if(!this.passenger1selected.value && !this.passenger2selected.value){
      alert(this.translate.translate('alertText'));
      return;
    }

    if(confirm(this.translate.translate('cancelTicket') + "?")){
      if(this.passenger1selected.value) {
        this.passenger1cancelled.set(true);
      }
      if(this.passenger2selected.value) {
        this.passenger2cancelled.set(true);
      }

      if(this.passenger1cancelled() && this.passenger2cancelled() ) {
        this.isCancelled.set(true);
      }
    }
  }

  onPrint() {
    window.print();
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
