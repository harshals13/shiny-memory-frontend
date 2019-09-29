import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  login(value) {
    this.bookingService.login(value).subscribe((data) => {
      console.log(data);
      const user = JSON.stringify(data);
      if (data.email) {
        localStorage.setItem('email', data.email);
        localStorage.setItem('name', data.fullName);
        localStorage.setItem('mobile', data.mobile);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', user);
        this.router.navigate(['/home']);
      }
    });
  }



}
