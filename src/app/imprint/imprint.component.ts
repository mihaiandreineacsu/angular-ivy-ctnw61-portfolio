import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css'],
})
export class ImprintComponent implements OnInit, OnDestroy {
  constructor(public navigation: NavigationService) {
    console.log('IMPRINT CONSTRUCTOR');
  }
  ngOnDestroy(): void {
    console.log('NGONDESTROY IMPRINT');
  }

  ngOnInit() {
    console.log('NGINIT IMPRINT');
  }
}
