import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InViewPortService } from '../in-view-port.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public navigation: NavigationService,
    public inviewport: InViewPortService
  ) {}

  navOpened = false;

  ngOnInit() {}

  toggleNav(event) {
    console.log(event);
    this.navOpened = !this.navOpened;
  }
}
