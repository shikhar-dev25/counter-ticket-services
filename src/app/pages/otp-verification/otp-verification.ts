import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../services/ticket';

@Component({
  selector: 'app-otp-verification',
  imports: [FormsModule],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.css',
})
export class OtpVerification {
  constructor (
    private router: Router,
    public ticket: Ticket
  ) {}

  otp = "";

  formValid() {
    return this.otp.length === 6;
  }

  onSubmit() {
    this.router.navigate(['/passenger-details'])
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }

  onResend() {
    this.otp = "";
    
  }
}
