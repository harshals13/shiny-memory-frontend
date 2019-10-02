import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.isLoggedIn;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
