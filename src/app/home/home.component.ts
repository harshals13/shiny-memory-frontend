import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packages = [];
  constructor(private bookingService: BookingService) { }
  tripForm: FormGroup;
  ngOnInit() {
    this.getPackages();
    this.tripForm = new FormGroup({
      packageName: new FormControl('', Validators.required),
      tripDate: new FormControl(new Date(), Validators.required)
    });
  }

  createTrip(value) {
    if (this.tripForm.valid) {
      const data = {
        package: this.packages.find((travelPackage) => travelPackage.packageName === value.packageName),
        user: JSON.parse(localStorage.getItem('user')),
      }
    }
  }

  getPackages() {
    this.bookingService.getPackages().subscribe((data) => {
      this.packages = data;
    });
  }

}
