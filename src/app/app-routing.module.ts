import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { PlanetsComponent } from './pages/planets/planets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'planets', component: PlanetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
