import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketData, OtpData, BoardingStation } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  verifyTicket(pnr: string, trainNumber: string): Observable<TicketData[]> {
    return this.http.get<TicketData[]>(
      `${this.apiUrl}/tickets?pnr=${pnr}&trainNumber=${trainNumber}`
    );
  }

  verifyOtp(pnr: string, otp: string): Observable<OtpData[]> {
    return this.http.get<OtpData[]>(
      `${this.apiUrl}/otps?pnr=${pnr}&otp=${otp}`
    );
  }

  getTicketByPnr(pnr: string): Observable<TicketData[]> {
    return this.http.get<TicketData[]>(
      `${this.apiUrl}/tickets?pnr=${pnr}`
    );
  }

  getBoardingStations(): Observable<BoardingStation[]> {
  return this.http.get<BoardingStation[]>(
    `${this.apiUrl}/boardingStations`
  );
}
}
