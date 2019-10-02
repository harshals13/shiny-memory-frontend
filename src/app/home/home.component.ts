import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  packages = [];
  constructor(private bookingService: BookingService, private router: Router) { }
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
        tripDate: value.tripDate,
        rate: '1500',
        isCompleted: false
      };
      this.bookingService.createTrip(data).subscribe((res) => {
        if (res) {
          this.router.navigate(['/selectdriver']);
        }
      });
    }
  }

  getPackages() {
    this.bookingService.getPackages().subscribe((data) => {
      this.packages = data;
    });
  }

}
