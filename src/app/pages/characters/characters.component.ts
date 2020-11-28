import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CharactersService } from './characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  @Input()
  characters: Observable<any>;


  constructor(private title: Title, private charactersService: CharactersService) {
    this.title.setTitle('Personagens');
    this.characters = charactersService.getAllCharacters();
    console.log(this.characters);
  }

  ngOnInit(): void {
  }

}
