import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators  } from '@angular/forms';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
import { ApiService } from '../../services/api';

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
    public translate: Translation,
    private apiService: ApiService
  ) {}

  otp = new FormControl('', Validators.required);

  formValid() {
    return this.otp.value?.length === 6;
  }

  onSubmit() {
    const otpValue = this.otp.value!;
    const pnr = this.ticket.pnrNumber;

    this.apiService.verifyOtp(pnr, otpValue).subscribe({
    next: (otps) => {
      if (otps.length === 0) {
        alert("Invalid OTP!");
        return;
      }

      if (this.ticket.transactionType === "Cancellation") {
        this.router.navigate(['/passenger-details']);
      }
      if (this.ticket.transactionType === "BoardingChange") {
        this.router.navigate(['/boarding-point-change']);
      }
    },
    error: () => {
      alert("Unable to verify. Please try again.");
    }
  });
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }

  onResend() {
    this.otp.setValue("");
  }
}
