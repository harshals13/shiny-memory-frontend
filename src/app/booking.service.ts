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

  getPackages(): Observable< any > {
    const responseType = 'json';
    this.options = {
      responseType
    };
    return this.http.get(AppConfig.baseUrlV1 + '/package', this.options)
    .pipe();
  }
}
