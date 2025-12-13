export interface Passenger {
  id: number;
  slNo: number;
  name: string;
  age: number;
  gender: string;
  bookingStatus: string;
  currentStatus: string;
  berth: string;
  isSelected: boolean;
  isCancelled: boolean;
}

export interface TicketData {
  id: number;
  pnr: string;
  trainNumber: string;
  trainName: string;
  journeyDate: string;
  fromStation: string;
  fromStationName: string;
  toStation: string;
  toStationName: string;
  journeyClass: string;
  quota: string;
  boardingStation: string;
  boardingStationName: string;
  reservationUpto: string;
  bookingAmount: number;
  voucherAmount: number;
  rtcAmount: number;
  refundAmount: number;
  transactionType: string;
  passengers: Passenger[];
}

export interface OtpData {
  id: number;
  pnr: string;
  otp: string;
  isVerified: boolean;
}

export interface BoardingStation {
  id: number;
  code: string;
  name: string;
}
