import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Ticket {
  pnrNumber: string = "";
  trainNumber: string = "";
  transactionType: string = "Cancellation";

  otp: string = "";

  passengerName: string = "RANDOM";
  passengerAge: number = 23;

  constructor() {}

  clearDate() {
    this.pnrNumber = "";
    this.trainNumber = "";
    this.transactionType = "";
    this.otp = "";

  }
}
