import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit, AfterViewInit {
  @ViewChild('text') text: ElementRef;
  newDom = '';
  animationDelay = 6;

  introText = 'Hi, My Name is Mihai-Andrei Neacsu. I am a Front-End Developer.';

  constructor(public navigation: NavigationService) {}
  ngAfterViewInit(): void {
    for (let i = 0; i < this.introText.length; i++) {
      this.newDom +=
        '<span class="char">' +
        (this.introText[i] == ' ' ? '&nbsp;' : this.introText[i]) +
        '</span>';
    }

    this.text.nativeElement.innerHTML = this.newDom;
    var length = this.text.nativeElement.children.length;

    for (let i = 0; i < length; i++) {
      this.text.nativeElement.children[i].style['animation-delay'] =
        this.animationDelay * i + 'ms';
    }
  }

  ngOnInit() {}
}
