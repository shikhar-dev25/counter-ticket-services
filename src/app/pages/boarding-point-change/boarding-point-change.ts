import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boarding-point-change',
  imports: [FormsModule],
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

  
  isChanged = signal(false); 
  newBoardingPoint = "";
  isChecked = false;

  isSelected() {
    return this.newBoardingPoint !== ""
  }
  onSubmit() {
    if(!this.isChecked) {
      alert("Please select the ticket")
    } else {
      if (confirm(this.translate.translate('changeBoardingPoint') + '?')) {
      this.isChanged.set(true);
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
