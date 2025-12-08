import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-otp-verification',
  imports: [FormsModule],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.css',
})
export class OtpVerification {
  constructor (
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) {}

  otp = "";

  formValid() {
    return this.otp.length === 6;
  }

  onSubmit() {
    if(this.ticket.transactionType === "Cancellation") {
      this.router.navigate(['/passenger-details'])
    } 
    if(this.ticket.transactionType === "BoardingChange") {
      this.router.navigate(['/boarding-point-change'])
    }
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }

  onResend() {
    this.otp = "";
    
  }
}
