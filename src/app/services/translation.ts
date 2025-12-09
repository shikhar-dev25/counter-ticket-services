import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Translation {
  currentLang = signal("en");

  en: any = {

    //Ticket Form
    pageTitle: 'Counter Ticket Cancellation/Boarding Point Change',
    transactionType: 'Transaction Type',
    cancellation: 'Cancellation',
    boardingChange: 'Boarding Point Change',
    pnrNumber: 'PNR Number',
    trainNumber: 'Train Number',
    captcha: 'Captcha',
    enterPnr: 'Enter PNR Number',
    enterTrain: 'Enter Train Number',
    enterCaptcha: 'Enter Captcha',
    terms: 'I have read cancellation/boarding point change procedure and its rule.',
    submit: 'Submit',
    reset: 'Reset',

    //OTP Page
    otpTitle: 'OTP Verification',
    otpMessage: 'OTP has been send on mobile number',
    enterOtp: 'Enter OTP',
    verifyOtp: 'Verify OTP',
    resend: 'Resend',
    back: 'Back',

  // passenger detail Page
  ticketDetails: 'Ticket Details',
  journeyDate: 'Journey Date',
  fromStation: 'From Station',
  toStation: 'To Station',
  quota: 'Quota',
  journeyClass: 'Journey Class',
  boardingStation: 'Boarding Station',
  reservationUpto: 'Reservation Upto',
  bookingAmount: 'Booking Amount',
  voucherAmount: 'Voucher Amount',
  rtcAmount: 'RTC Amount',
  passengerDetails: 'Passenger Details',
  slNo: 'Sl.No',
  name: 'Name',
  age: 'Age',
  gender: 'Gender',
  bookingStatus: 'Booking Status',
  currentStatus: 'Current Status',
  select: 'Select',
  trainName: 'Train Name',

  //boarding point
  boardingTitle: 'New Boarding Point',
  selectBoarding: 'Select New Boarding Point',
  successMessage: 'Boarding point has been successfully changed.',
  changeBoardingPoint: "Do you want to change the boarding point",
  

  //procedure panel
  procedureTitle: 'Counter Ticket Cancellation Procedure',
  rulesTitle: 'Counter Ticket Cancellation Rules',

  //after cancellation
  cancellationSuccess: 'Ticket has been successfully cancelled. Please deposit the original ticket and collect your refund from journey commencing station or nearby satellite PRS counter within prescribed notified time. Refund amount may change at the time of surrendering of ticket as per cancellation location.',
  printTicket: 'Print',
  cancelTicket: 'Do you want to cancel the ticket',

  proc1: 'Enter PNR Number, Train number along with Captcha.',
  proc2: 'Select check box to confirm that rules and procedure are read.',
  proc3: 'After click on submit an OTP will be sent on mobile number given at the time of booking, enter the received OTP and click submit.',
  proc4: 'After the OTP is validated PNR details will be displayed on the screen.',
  proc5: 'After verifying the details Click on "Cancel Ticket" for full cancellation. Refund amount due will be displayed on the screen.',
  proc6: 'An SMS will be sent with PNR and refund details. Sample format: "Your PNR xxxxxxxxxx has been cancelled. Collect refund amt xxxxx from journey commencing station or nearby satellite PRS locations. Ref. Terms & conditions"',
  proc6bold: 'Sample format: "Your PNR xxxxxxxxxx has been cancelled. Collect refund amt xxxxx from journey commencing station or nearby satellite PRS locations. Ref. Terms & conditions"',
  proc7: 'For tickets cancelled (including return journey tickets) up to 4 hours for the confirmed tickets and up to thirty minutes for RAC/waitlisted tickets before the scheduled departure time as prescribed in the refund rules and changes made from time to time: Collection of Refund of cancelled PRS counter tickets through IRCTC website or 139 is permitted from any PRS counters of Indian Railways by surrendering original journey ticket. Collection of refund amount beyond this time limit is permitted at journey commencing station or nearby satellite PRS locations identified by Zonal Railways. Please check the convenience of collecting refund from journey commencing station before cancelling your ticket.',
  proc7a: 'During first two hours of the opening of PRS counters on the next day for the tickets for the trains whose scheduled departure time is (i) between 1801 hours and 0600 hours.',
  proc7b: 'Upto 4 hours after the scheduled departure of the train during the working hours of PRS counters/current counters/special counters where cancellation is permitted round the clock on the tickets for the trains whose scheduled departure time is (i) between 0601 hours and 1800 hours.',
  
  rule1: 'This may be applicable only in case valid mobile number has been given at the time of booking.',
  rule2: 'Cancellation of tickets and refund of fare may be permitted for PRS counter tickets in normal circumstances only and not in case of late running of trains/cancellation of train etc.',
  rule3: 'Online cancellation shall be permitted only upto 4 hours before the scheduled departure of the train if ticket is fully confirmed.',
  rule4: 'Online cancellation shall be permitted only upto 30 minutes before the scheduled departure of the train if ticket is RAC/Waitlist.',
  rule5: 'For tickets cancelled (including return journey tickets) up to 4 hours for the confirmed tickets and up to thirty minutes for RAC/waitlisted tickets before the scheduled departure time as prescribed in the refund rules and changes made from time to time: Collection of Refund of cancelled PRS counter tickets through IRCTC website or 139 is permitted from any PRS counters of Indian Railways by surrendering original journey ticket. Collection of refund amount beyond this time limit is permitted at journey commencing station or nearby satellite PRS locations identified by Zonal Railways. Please check the convenience of collecting refund from journey commencing station before cancelling your ticket.',
  rule5a: 'During first two hours of the opening of PRS counters on the next day for the tickets for the trains whose scheduled departure time is (i) between 1801 hours and 0600 hours.',
  rule5b: 'Upto 4 hours after the scheduled departure of the train during the working hours of PRS counters/current counters/special counters where cancellation is permitted round the clock on the tickets for the trains whose scheduled departure time is (i) between 0601 hours and 1800 hours.',
  rule6: 'Passenger details (Viz.name, age, gender, booking status, current status) and journey details will be displayed on the website.',
  rule7: 'Once the passenger confirms full cancellation of PNR will be done and PNR will be marked as Cancelled but not refunded in the system. Seat/berth will be released. Refund amount due will also be displayed to the passenger on website.',
  rule8: 'All the privilege/duty pass/PTOs/complimentary pass tickets may be allowed to be cancelled through website. In the case of pass zero refund is permissible however, for validity of the pass for fresh booking the passenger shall approach the counter to get the pass re-validated by marking the same cancelled against the earlier booked tickets as per prescribed rule. PTOs tickets are issued on 1/3rd of the total basic fares and normal cancellation charge is applicable in these tickets also. Therefore in many cases ticket value on PTOs is less than the cancellation charges therefore passengers may or may not cancel the tickets therefore cancellation across IRCTC website may be allowed in the case of PTOs also.',

  };
  hin: any = {

    //Ticket form page
    pageTitle: 'काउंटर टिकट रद्दीकरण / बोर्डिंग पॉइंट परिवर्तन',
    transactionType: 'लेन-देन का प्रकार',
    cancellation: 'रद्दीकरण',
    boardingChange: 'बोर्डिंग पॉइंट परिवर्तन',
    pnrNumber: 'पीएनआर नंबर',
    trainNumber: 'ट्रेन नंबर',
    captcha: 'कैप्चा',
    enterPnr: 'पीएनआर नंबर दर्ज करें',
    enterTrain: 'ट्रेन नंबर दर्ज करें',
    enterCaptcha: 'कैप्चा दर्ज करें',
    terms: 'मैंने रद्दीकरण/बोर्डिंग पॉइंट परिवर्तन प्रक्रिया और इसके नियम पढ़ लिए हैं।',
    submit: 'जमा करें',
    reset: 'रीसेट',

    //otp page
    otpTitle: 'ओटीपी सत्यापन',
    otpMessage: 'मोबाइल नंबर पर ओटीपी भेजा गया है',
    enterOtp: 'ओटीपी दर्ज करें',
    verifyOtp: 'ओटीपी सत्यापित करें',
    resend: 'पुनः भेजें',
    back: 'वापस',

  // Passenger Details Page
  ticketDetails: 'टिकट विवरण',
  journeyDate: 'यात्रा तिथि',
  fromStation: 'प्रस्थान स्टेशन',
  toStation: 'गंतव्य स्टेशन',
  quota: 'कोटा',
  journeyClass: 'यात्रा श्रेणी',
  boardingStation: 'बोर्डिंग स्टेशन',
  reservationUpto: 'आरक्षण तक',
  bookingAmount: 'बुकिंग राशि',
  voucherAmount: 'वाउचर राशि',
  rtcAmount: 'आरटीसी राशि',
  passengerDetails: 'यात्री विवरण',
  slNo: 'क्रम संख्या',
  name: 'नाम',
  age: 'आयु',
  gender: 'लिंग',
  bookingStatus: 'बुकिंग स्थिति',
  currentStatus: 'वर्तमान स्थिति',
  select: 'चयन करें',
  trainName: 'ट्रेन का नाम',

  //Boarding point 
  selectBoarding: 'नया बोर्डिंग पॉइंट चुनें',
  boardingTitle: 'नया बोर्डिंग पॉइंट',
  successMessage: 'बोर्डिंग पॉइंट सफलतापूर्वक बदल दिया गया है।',
  changeBoardingPoint: "क्या आप बोर्डिंग पॉइंट बदलना चाहते हैं?",  
  //after cancellation
  cancellationSuccess: 'टिकट सफलतापूर्वक रद्द कर दिया गया है। कृपया निर्धारित समय सीमा के भीतर यात्रा प्रारंभ स्टेशन या निकटतम सैटेलाइट पीआरएस काउंटर से मूल टिकट जमा करें और धनवापसी एकत्र करें। रद्दीकरण स्थान के अनुसार टिकट जमा करने के समय धनवापसी राशि बदल सकती है|',
  printTicket: 'प्रिंट करें',
  cancelTicket: 'क्या आप टिकट रद्द करना चाहते हैं',
    
  //procedure panel
  procedureTitle: 'काउंटर टिकट रद्दीकरण प्रक्रिया',
  rulesTitle: 'काउंटर टिकट रद्दीकरण नियम',

  proc1: 'कैप्चा के साथ पीएनआर नंबर, ट्रेन नंबर दर्ज करें।',
  proc2: 'नियम और प्रक्रिया पढ़ने की पुष्टि के लिए चेक बॉक्स का चयन करें।',
  proc3: 'सबमिट पर क्लिक करने के बाद बुकिंग के समय दिए गए मोबाइल नंबर पर ओटीपी भेजा जाएगा, प्राप्त ओटीपी दर्ज करें और सबमिट पर क्लिक करें।',
  proc4: 'ओटीपी सत्यापित होने के बाद पीएनआर विवरण स्क्रीन पर प्रदर्शित होगा।',
  proc5: 'विवरण सत्यापित करने के बाद पूर्ण रद्दीकरण के लिए "टिकट रद्द करें" पर क्लिक करें। देय धनवापसी राशि स्क्रीन पर प्रदर्शित होगी।',
  proc6: 'पीएनआर और धनवापसी विवरण के साथ एक एसएमएस भेजा जाएगा। नमूना प्रारूप: "आपका पीएनआर xxxxxxxxxx रद्द कर दिया गया है। यात्रा प्रारंभ स्टेशन या निकटतम सैटेलाइट पीआरएस काउंटर से धनवापसी राशि xxxxx एकत्र करें। संदर्भ नियम और शर्तें"',
  proc6bold: 'नमूना प्रारूप: "आपका पीएनआर xxxxxxxxxx रद्द कर दिया गया है। यात्रा प्रारंभ स्टेशन या निकटतम सैटेलाइट पीआरएस काउंटर से धनवापसी राशि xxxxx एकत्र करें। संदर्भ नियम और शर्तें"',
  proc7: 'पुष्टिकृत टिकटों के लिए निर्धारित प्रस्थान समय से 4 घंटे पहले तक और आरएसी/प्रतीक्षा सूची टिकटों के लिए तीस मिनट पहले तक रद्द किए गए टिकटों (वापसी यात्रा टिकट सहित) के लिए धनवापसी नियमों में निर्धारित अनुसार और समय-समय पर किए गए परिवर्तनों के अनुसार: आईआरसीटीसी वेबसाइट या 139 के माध्यम से रद्द किए गए पीआरएस काउंटर टिकटों की धनवापसी मूल यात्रा टिकट जमा करके भारतीय रेलवे के किसी भी पीआरएस काउंटर से एकत्र की जा सकती है। इस समय सीमा के बाद धनवापसी राशि का संग्रह यात्रा प्रारंभ स्टेशन या क्षेत्रीय रेलवे द्वारा चिह्नित निकटतम सैटेलाइट पीआरएस स्थानों से अनुमत है। कृपया अपना टिकट रद्द करने से पहले यात्रा प्रारंभ स्टेशन से धनवापसी एकत्र करने की सुविधा की जांच करें।',
  proc7a: 'अगले दिन पीआरएस काउंटरों के खुलने के पहले दो घंटों के दौरान उन ट्रेनों के टिकटों के लिए जिनका निर्धारित प्रस्थान समय (i) 1801 घंटे और 0600 घंटे के बीच है।',
  proc7b: 'ट्रेन के निर्धारित प्रस्थान के 4 घंटे बाद तक पीआरएस काउंटरों/वर्तमान काउंटरों/विशेष काउंटरों के कार्य समय के दौरान जहां उन ट्रेनों के टिकटों पर चौबीसों घंटे रद्दीकरण की अनुमति है जिनका निर्धारित प्रस्थान समय (i) 0601 घंटे और 1800 घंटे के बीच है।',
  
  rule1: 'यह केवल तभी लागू हो सकता है जब बुकिंग के समय वैध मोबाइल नंबर दिया गया हो।',
  rule2: 'केवल सामान्य परिस्थितियों में पीआरएस काउंटर टिकटों के लिए टिकट रद्द करने और किराए की धनवापसी की अनुमति दी जा सकती है और ट्रेनों के देर से चलने/ट्रेन रद्द होने आदि के मामले में नहीं।',
  rule3: 'यदि टिकट पूरी तरह से पुष्टिकृत है तो ट्रेन के निर्धारित प्रस्थान से केवल 4 घंटे पहले तक ऑनलाइन रद्दीकरण की अनुमति दी जाएगी।',
  rule4: 'यदि टिकट आरएसी/प्रतीक्षा सूची में है तो ट्रेन के निर्धारित प्रस्थान से केवल 30 मिनट पहले तक ऑनलाइन रद्दीकरण की अनुमति दी जाएगी।',
  rule5: 'पुष्टिकृत टिकटों के लिए निर्धारित प्रस्थान समय से 4 घंटे पहले तक और आरएसी/प्रतीक्षा सूची टिकटों के लिए तीस मिनट पहले तक रद्द किए गए टिकटों (वापसी यात्रा टिकट सहित) के लिए धनवापसी नियमों में निर्धारित अनुसार और समय-समय पर किए गए परिवर्तनों के अनुसार: आईआरसीटीसी वेबसाइट या 139 के माध्यम से रद्द किए गए पीआरएस काउंटर टिकटों की धनवापसी मूल यात्रा टिकट जमा करके भारतीय रेलवे के किसी भी पीआरएस काउंटर से एकत्र की जा सकती है। इस समय सीमा के बाद धनवापसी राशि का संग्रह यात्रा प्रारंभ स्टेशन या क्षेत्रीय रेलवे द्वारा चिह्नित निकटतम सैटेलाइट पीआरएस स्थानों से अनुमत है। कृपया अपना टिकट रद्द करने से पहले यात्रा प्रारंभ स्टेशन से धनवापसी एकत्र करने की सुविधा की जांच करें।',
  rule5a: 'अगले दिन पीआरएस काउंटरों के खुलने के पहले दो घंटों के दौरान उन ट्रेनों के टिकटों के लिए जिनका निर्धारित प्रस्थान समय (i) 1801 घंटे और 0600 घंटे के बीच है।',
  rule5b: 'ट्रेन के निर्धारित प्रस्थान के 4 घंटे बाद तक पीआरएस काउंटरों/वर्तमान काउंटरों/विशेष काउंटरों के कार्य समय के दौरान जहां उन ट्रेनों के टिकटों पर चौबीसों घंटे रद्दीकरण की अनुमति है जिनका निर्धारित प्रस्थान समय (i) 0601 घंटे और 1800 घंटे के बीच है।',
  rule6: 'यात्री विवरण (नाम, आयु, लिंग, बुकिंग स्थिति, वर्तमान स्थिति) और यात्रा विवरण वेबसाइट पर प्रदर्शित किए जाएंगे।',
  rule7: 'एक बार यात्री द्वारा पुष्टि करने के बाद पीएनआर का पूर्ण रद्दीकरण किया जाएगा और पीएनआर को रद्द के रूप में चिह्नित किया जाएगा लेकिन सिस्टम में धनवापसी नहीं की जाएगी। सीट/बर्थ जारी की जाएगी। देय धनवापसी राशि भी वेबसाइट पर यात्री को प्रदर्शित की जाएगी।',
  rule8: 'सभी विशेषाधिकार/ड्यूटी पास/पीटीओ/मानार्थ पास टिकटों को वेबसाइट के माध्यम से रद्द करने की अनुमति दी जा सकती है। पास के मामले में शून्य धनवापसी स्वीकार्य है, हालांकि, नई बुकिंग के लिए पास की वैधता के लिए यात्री को निर्धारित नियम के अनुसार पहले बुक किए गए टिकटों के खिलाफ रद्द के रूप में चिह्नित करके पास को पुनः मान्य कराने के लिए काउंटर से संपर्क करना होगा। पीटीओ टिकट कुल मूल किराए के 1/3 पर जारी किए जाते हैं और इन टिकटों में भी सामान्य रद्दीकरण शुल्क लागू होता है। इसलिए कई मामलों में पीटीओ पर टिकट मूल्य रद्दीकरण शुल्क से कम है इसलिए यात्री टिकट रद्द कर सकते हैं या नहीं कर सकते हैं इसलिए पीटीओ के मामले में भी आईआरसीटीसी वेबसाइट पर रद्दीकरण की अनुमति दी जा सकती है।',
  };

  translate(key: string): string {
    if(this.currentLang() === "en") {
      return this.en[key];
    } else {
      return this.hin[key];
    }
  }

  switchLanguage(lang: string) {
    this.currentLang.set(lang)
  }
}
