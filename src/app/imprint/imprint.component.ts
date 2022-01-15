import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css'],
})
export class ImprintComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  ngOnInit() {}
}
