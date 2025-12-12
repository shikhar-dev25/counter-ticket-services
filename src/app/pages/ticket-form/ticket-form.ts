import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ticket } from '../../services/ticket';
import { Translation } from '../../services/translation';
@Component({
  selector: 'app-ticket-form',
  imports: [ReactiveFormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css',
})
export class TicketForm {
  constructor(
    private router: Router,
    public ticket: Ticket,
    public translate: Translation
  ) { this.captchaGenerator()}

  captchaText = "";
  ticketForm = new FormGroup({
    transactionType: new FormControl('Cancellation', Validators.required),
    pnrNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    trainNumber: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    captcha: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    isChecked: new FormControl(false, Validators.requiredTrue)
  })


  captchaGenerator() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789abcdefghijkmnpqrstuvwxyz123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  this.captchaText = captcha;
  }

  refreshCaptcha() {
    this.captchaGenerator();
    this.ticketForm.get('captcha')?.reset();
  }





  onSubmit() {
    // Check if form is valid
    if (this.ticketForm.invalid) {
      // Mark all fields as touched to show validation errors
      this.ticketForm.markAllAsTouched();
      return;
    }

    // Get form values
    const formValues = this.ticketForm.value;

    // Validate captcha
    if (formValues.captcha !== this.captchaText) {
      alert("Wrong Captcha!");
      this.refreshCaptcha();
      return;
    }

    // Store in service
    this.ticket.pnrNumber = formValues.pnrNumber!;
    this.ticket.trainNumber = formValues.trainNumber!;
    this.ticket.transactionType = formValues.transactionType!;

    // Navigate to OTP page
    this.router.navigate(['/otp']);
  }

  onReset() {
    this.ticketForm.reset({
      transactionType: 'Cancellation'
    });
    this.refreshCaptcha();
  }
}
