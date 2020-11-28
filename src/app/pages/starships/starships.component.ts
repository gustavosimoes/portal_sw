import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Naves Estelares')
  }

  ngOnInit(): void {
  }

}
