import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ticket-form',
  imports: [FormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css',
})
export class TicketForm {
  constructor(private router: Router) {}
  
  pnrNumber = "";
  trainNumber = "";
  captcha = "";
  isChecked = false;

  formValid() {
    return this.pnrNumber !== "" && this.captcha !== "" && this.trainNumber !== "";
  }
  


  onSubmit() {
    if (this.formValid() && this.isChecked){
      this.router.navigate(['/otp'])
    }
  }
  
  onReset() {
    this.pnrNumber = "";
    this.trainNumber = "";
    this.captcha = "";
  }
}
