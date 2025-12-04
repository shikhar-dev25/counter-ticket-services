import { Component, OnInit } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  navDate = signal('');
  navTime = signal('');

  ngOnInit() {
    this.updateDate();
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateDate() {
    const date = new Date();
    this.navDate.set(date.toLocaleDateString('en-IN', {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }));
  }

  updateTime(){
    const date = new Date();
    this.navTime.set(date.toLocaleTimeString('en-US', {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }));
  }
}