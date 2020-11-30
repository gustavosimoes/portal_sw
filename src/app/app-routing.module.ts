import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersInfoComponent } from './pages/characters-info/characters-info.component';

import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsInfoComponent } from './pages/starships-info/starships-info.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'starships/:id', component: StarshipsInfoComponent},
  { path: 'characters/:id', component: CharactersInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
