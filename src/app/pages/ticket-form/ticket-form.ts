import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
@Component({
  selector: 'app-ticket-form',
  imports: [FormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css',
})
export class TicketForm {
  constructor(
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) { this.captchaGenerator()}
  
  pnrNumber = "";
  trainNumber = "";
  captcha = "";
  isChecked = false;
  captchaText = "";
  transactionType: string = "Cancellation";

  captchaGenerator() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  this.captchaText = captcha;
  }

  refreshCaptcha() {
    this.captchaGenerator();
  }
  formValid() {
    return this.pnrNumber !== "" && this.captcha !== "" && this.trainNumber !== "" && this.isChecked;
  }
  


  onSubmit() {
    
    if (this.formValid() ){
      if(this.captcha !== this.captchaText) {
        alert("Wrong Captcha!")
        return;
      }
      this.ticket.pnrNumber = this.pnrNumber;
      this.ticket.trainNumber = this.trainNumber;
      this.ticket.transactionType = this.transactionType;

      this.router.navigate(['/otp'])
    }
  }
  
  onReset() {
    this.pnrNumber = "";
    this.trainNumber = "";
    this.captcha = "";
  }
}
