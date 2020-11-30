import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { StarshipsService } from './starships.service';

export class Starship {
  constructor(
      public name: string,
      public model: string,
      public manufacturer: string,
      public cost_in_credits: number,
      public length: number,
      public max_atmosphering_speed: number,
      public crew: string,
      public passengers: number,
      public cargo_capacity: number,
      public consumables: string,
      public hyperdrive_rating: string,
      public MGLT: number,
      public starship_class: string, 
      public pilots: string[],
      public films: string[],
      public created: string,
      public edited: string,
      public url: string
  ) {}
}


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  page = 0;
  starshipsMatrix: Starship[][] = [];
  starships: Starship[] = this.starshipsMatrix[0];

  constructor(private title: Title, private starshipsService: StarshipsService) {
    this.title.setTitle('Naves Estelares')
  }

  async getAllStarships() {
    this.starshipsMatrix = await this.starshipsService.getAllStarships();
    this.attPage(1);
  }

  attPage(newPage: any) {
    if (!((this.page == 1 && newPage == -1) || (this.page == 4 && newPage == 1))) {
      this.page = this.page + newPage;
    }
    this.starships = this.starshipsMatrix[this.page - 1];
    console.log(this.page);
  }

  ngOnInit(): void {
    this.getAllStarships();
  }

}