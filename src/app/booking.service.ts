import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public options: {};

  constructor(private http: HttpClient) { }

  login(data): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.post(AppConfig.baseUrlV1 + '/user/login', data, this.options)
    .pipe();
  }

  createTrip(data): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.post(AppConfig.baseUrlV1 + '/trip', data, this.options)
    .pipe();
  }

  getPackages(): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.get(AppConfig.baseUrlV1 + '/package', this.options)
    .pipe();
  }

  getTripDetailsOfUser(email): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.get(AppConfig.baseUrlV1 + `/trip?email=${email}`, this.options)
    .pipe();
  }

  getDriverDetails(): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.get(AppConfig.baseUrlV1 + '/driver', this.options)
    .pipe();
  }

  updateDriverToTrip(data): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.put(AppConfig.baseUrlV1 + '/trip', data, this.options)
    .pipe();
  }

  submitBookingConfirmation(data): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.post(AppConfig.baseUrlV1 + '/booking', data, this.options)
    .pipe();
  }
}
