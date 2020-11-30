import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersInfoComponent } from './pages/characters-info/characters-info.component';
import { StarshipsInfoComponent } from './pages/starships-info/starships-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StarshipsComponent,
    CharactersComponent,
    CharactersInfoComponent,
    StarshipsInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
