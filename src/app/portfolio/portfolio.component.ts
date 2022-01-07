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
      img: '',
      categorie: 'javascript',
    },
    {
      name: 'JOIN',
      img: '',
      categorie: 'javascript',
    },
    {
      name: 'SIMPLE CRM',
      img: '',
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
