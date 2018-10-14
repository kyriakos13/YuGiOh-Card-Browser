import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-route',
  templateUrl: './invalid-route.component.html',
  styleUrls: ['./invalid-route.component.css']
})
export class InvalidRouteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
