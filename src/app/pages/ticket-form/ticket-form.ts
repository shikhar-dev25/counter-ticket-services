import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../services/ticket';
@Component({
  selector: 'app-ticket-form',
  imports: [FormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css',
})
export class TicketForm {
  constructor(
    private router: Router,
    private ticket: Ticket
  ) {}
  
  pnrNumber = "";
  trainNumber = "";
  captcha = "";
  isChecked = false;

  formValid() {
    return this.pnrNumber !== "" && this.captcha !== "" && this.trainNumber !== "";
  }
  


  onSubmit() {
    if (this.formValid() && this.isChecked){

      this.ticket.pnrNumber = this.pnrNumber;
      this.ticket.trainNumber = this.trainNumber;

      this.router.navigate(['/otp'])
    }
  }
  
  onReset() {
    this.pnrNumber = "";
    this.trainNumber = "";
    this.captcha = "";
  }
}
