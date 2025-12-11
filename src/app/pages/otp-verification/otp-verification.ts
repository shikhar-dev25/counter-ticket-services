import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators  } from '@angular/forms';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.css',
})
export class OtpVerification {
  constructor (
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) {}

  otp = new FormControl('', Validators.required);

  formValid() {
    return this.otp.value?.length === 6;
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
    this.otp.setValue("");
  }
}
