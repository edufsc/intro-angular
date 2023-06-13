import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-card-v2',
  templateUrl: './pokemon-card-v2.component.html',
  styleUrls: ['./pokemon-card-v2.component.css'],
})
export class PokemonCardV2Component implements OnInit {
  pokemon: any = null;
  @Input() pokemonId: number = 0;

  constructor(private pokedexService: PokedexService) {}

  // se ejecuta cuando se inicia el componente
  ngOnInit() {
    // comprobamos que el id sea válido
    if (this.pokemonId > 0) {
      this.obtenerPokemon(this.pokemonId);
    }
  }

  obtenerPokemon(id: number) {
    this.pokedexService.getPokemon(id).subscribe((pokemon: any) => {
      console.log({ pokemon });
      this.pokemon = pokemon;
    });
  }
}
