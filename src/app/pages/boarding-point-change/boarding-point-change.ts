import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boarding-point-change',
  imports: [],
  templateUrl: './boarding-point-change.html',
  styleUrl: './boarding-point-change.css',
})
export class BoardingPointChange {
  constructor (private router: Router) {}

  onSubmit() {
    alert("Do you want to change the boarding point?")
  }

  onBack() {
    this.router.navigate(['/ticket-form'])
  }
}
