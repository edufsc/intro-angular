import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
// para utilizar propiedades de componente en campos de formulario
import { FormsModule } from '@angular/forms';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { MiContadorComponent } from './pages/mi-contador/mi-contador.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardV2Component } from './components/pokemon-card-v2/pokemon-card-v2.component';
import { EquipoPokemonComponent } from './pages/equipo-pokemon/equipo-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaCompraComponent,
    MiListaComponent,
    MiContadorComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonCardComponent,
    PokemonCardV2Component,
    EquipoPokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
