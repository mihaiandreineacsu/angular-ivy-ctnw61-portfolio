import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InViewPortService } from '../in-view-port.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  /**
   * We need the text as a Character Array for *ngFor to work. ['H', 'i', ...]
   */
  introText = [
    ...'Hi,%My Name is Mihai-Andrei Neacsu.%I am a Front-End Developer.',
  ];

  constructor(
    public navigation: NavigationService,
    public inviewport: InViewPortService
  ) {}

  /**
   * @param {number} - index position of letter
   */
  getAnimationDelay(index: number) {
    return `${10 * index}ms`;
  }

  handleTouchStart(event) {
    console.log(event.type);
  }
  handleTouchMove(event) {
    console.log(event.type);
  }
  handleTouchEnd(event) {
    console.log(event.type);
  }

  handleTouchCancel(event) {
    console.log(event.type);
  }

  handleViewChange(event) {
    console.log(event);
  }

  ngOnInit() {}
}
