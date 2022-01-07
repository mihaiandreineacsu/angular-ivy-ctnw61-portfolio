import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent implements OnInit {
  introText = 'Hi, My Name is Mihai-Andrei Neacsu. I am a Front-End Developer.';

  constructor() {}

  ngOnInit() {}
}
