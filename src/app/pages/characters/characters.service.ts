import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './characters.component';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly page_1 = 'https://swapi.dev/api/people';


  characters: Character[] = [];
  charactersMatriz: Character[][] = [];
  constructor(private http: HttpClient) { }
  getAllCharacters(): Character[][] {
    this.http.get<any>(this.page_1).subscribe(res =>
      this.charactersMatriz[0] = res.results);
    for(let page = 2; page<=9; page++){
      this.http.get<any>(`https://swapi.dev/api/people/?page=${page}`).subscribe(res =>
        this.charactersMatriz[page-1] = res.results);
    }
    console.log(this.charactersMatriz);
    return this.charactersMatriz;
  }
}