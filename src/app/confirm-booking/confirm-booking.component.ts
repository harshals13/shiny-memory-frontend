import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  showBookingTicket = false;
  bookingData: any;

  constructor(private bookingService: BookingService, private router: Router) { }
  trip: any;
  formInvalid = false
  confirmBookingForm: FormGroup;
  ngOnInit() {
    this.confirmBookingForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pickUpAddress: new FormControl('', Validators.required),
      pickUpTime: new FormControl(new Date(), Validators.required)
    });
    this.checkIfUserLoggedIn();

  }

  checkIfUserLoggedIn() {
    if (localStorage.email === undefined) {
      this.router.navigate(['/login']);
    } else {
      this.prefillConfirmationForm();
      this.getTripDetails();
    }
  }

  prefillConfirmationForm() {
    this.confirmBookingForm.patchValue({
      fullName: localStorage.name,
      mobile: localStorage.mobile,
      email: localStorage.email
    });
  }

  getTripDetails() {
    this.bookingService.getTripDetailsOfUser(localStorage.email).subscribe((res) => {
      this.trip = res;
      if ( !res) {
        this.router.navigate(['/home']);
      } else if (this.trip.isCompleted){
        this.router.navigate(['/home']);
      }
      console.log(res);
    });
  }

  submitBookingConfirmation(value) {
    if(this.confirmBookingForm.valid) {
      this.formInvalid = false;
      this.trip.isCompleted = true;
      const data = {
        trip: this.trip,
        pickUpAddress: value.pickUpAddress,
        pickUpTime: value.pickUpTime,
        paymentStatus: 'paid'
      }
      console.log(data);
      this.bookingService.submitBookingConfirmation(data).subscribe((res)=> {
        console.log(res);
        if (res.paymentStatus === 'paid') {
          this.showBookingTicket = true;
          this.bookingData = res;
        }
      });
    } else {
      this.formInvalid = true;
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
