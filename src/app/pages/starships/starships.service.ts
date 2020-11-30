import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Starship } from './starships.component'

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private readonly page_1 = 'https://swapi.dev/api/starships/';


  starships: Starship[] = [];
  starshipsMatriz: Starship[][] = [];

  constructor(private http: HttpClient) { }
  
  getAllStarships(): Starship[][] {
    this.http.get<any>(this.page_1).subscribe(res =>
      this.starshipsMatriz[0] = res.results);
    for(let page = 2; page<=4; page++){
      this.http.get<any>(`https://swapi.dev/api/starships/?page=${page}`).subscribe(res =>
        this.starshipsMatriz[page-1] = res.results);
    }
    console.log(this.starshipsMatriz);
    return this.starshipsMatriz;
  }
}
