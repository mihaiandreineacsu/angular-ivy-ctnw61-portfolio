import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css'],
})
export class ImprintComponent {
  constructor(public navigation: NavigationService) {}
}
