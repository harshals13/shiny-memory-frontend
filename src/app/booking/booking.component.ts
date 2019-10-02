import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  trip: any;

  constructor(private bookingService: BookingService, private router: Router) { }
  drivers = [];
  languages = ['Hindi', 'English', 'Kannada'];
  filteredDrivers = [];

  ngOnInit() {
    this.getTripDetails();
    this.getDrivers();
  }

  getDrivers() {
    this.bookingService.getDriverDetails().subscribe((res) => {
      this.drivers = res;
      this.filteredDrivers = this.drivers;
    });
  }

  getTripDetails() {
    this.bookingService.getTripDetailsOfUser(localStorage.email).subscribe((res) => {
      this.trip = res;
      console.log(res);
    });
  }

  filterByLanguage(language) {
    if (language === ' ') {
      this.getDrivers();
    }
    this.filteredDrivers = this.drivers.filter((driver) => driver.language === language);
  }

  goToConfirmBooking(driver) {
    console.log("Hello")
    const data = {
      _id: this.trip._id,
      driver: driver
    };
    console.log(data);
    this.bookingService.updateDriverToTrip(data).subscribe((res) => {
      if (res) {
        this.router.navigate(['/confirmbooking']);
      }
    });
  }

}
