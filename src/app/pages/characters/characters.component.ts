import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CharactersService } from './characters.service';
import { Observable } from 'rxjs';

export class Character {
  constructor(
    public name: string,
    public height: number,
    public mass: number,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public films: string[],
    public species: string[],
    public vehicles: string[],
    public starships: string[],
    public created: string[],
    public edited: string[],
    public url: string[]
  ) { }
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  @Input()
  page = 0;
  charactersMatrix: Character[][] = [];
  characters: Character[] = this.charactersMatrix[0];


  constructor(private title: Title, private charactersService: CharactersService) {
    this.title.setTitle('Personagens');
  }

  async getAllCharacters() {
    this.charactersMatrix = await this.charactersService.getAllCharacters();
    this.attPage(1);
  }

  attPage(newPage: any) {
    if (!((this.page == 1 && newPage == -1) || (this.page == 9 && newPage == 1))) {
      this.page = this.page + newPage;
    }
    this.characters = this.charactersMatrix[this.page - 1];
    console.log(this.page);
  }

  ngOnInit(): void {
    this.getAllCharacters();
  }
}
