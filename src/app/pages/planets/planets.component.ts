import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Planetas')
  }

  ngOnInit(): void {
  }

}
