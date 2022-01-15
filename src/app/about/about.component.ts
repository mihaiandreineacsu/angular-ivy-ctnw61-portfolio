import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  ngOnInit() {}
}
