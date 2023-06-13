import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiListaComponent } from './pages/mi-lista/mi-lista.component';
import { MiContadorComponent } from './pages/mi-contador/mi-contador.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { EquipoPokemonComponent } from './pages/equipo-pokemon/equipo-pokemon.component';

const routes: Routes = [
  {
    path: 'mi-lista',
    component: MiListaComponent,
  },
  {
    path: 'mi-contador',
    component: MiContadorComponent,
  },
  {
    path: 'pokedex',
    component: PokedexComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
  },
  {
    path: 'equipo-pokemon',
    component: EquipoPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
