import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = [
    {
      name: 'El POLLO LOCO',
      img: 'https://stackblitz.com/files/angular-ivy-ctnw61/github/crunck78/angular-ivy-ctnw61-portfolio/master/src/profile.png',
      categorie: 'javascript',
    },
    {
      name: 'JOIN',
      img: 'https://stackblitz.com/files/angular-ivy-ctnw61/github/crunck78/angular-ivy-ctnw61-portfolio/master/src/profile.png',
      categorie: 'javascript',
    },
    {
      name: 'SIMPLE CRM',
      img: 'https://stackblitz.com/files/angular-ivy-ctnw61/github/crunck78/angular-ivy-ctnw61-portfolio/master/src/profile.png',
      categorie: 'angular',
    },
  ];

  filterdProjects = this.projects;

  showProjects(categorie) {
    if (categorie !== 'all') {
      this.filterdProjects = this.projects.filter(
        (p) => p.categorie === categorie
      );
    } else {
      this.filterdProjects = this.projects;
    }
  }

  constructor() {}

  ngOnInit() {}
}
