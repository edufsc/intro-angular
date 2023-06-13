import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: any = null;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    // si hay id en la url
    if (pokemonId) {
      // lo convertimos a número entero
      const id = parseInt(pokemonId);
      // obtenemos el pokemon con ese id
      this.obtenerPokemon(id);
    }
  }

  obtenerPokemon(id: number) {
    this.pokedexService.getPokemon(id).subscribe((pokemon: any) => {
      console.log({ pokemon });
      this.pokemon = pokemon;
    });
  }

  siguientePokemon() {
    let siguienteId = this.pokemon.id + 1;
    if (siguienteId > 1010) {
      siguienteId = 1;
    }
    this.obtenerPokemon(siguienteId);
  }

  anteriorPokemon() {
    let anteriorId = this.pokemon.id - 1;
    if (anteriorId <= 0) {
      anteriorId = 1010;
    }
    this.obtenerPokemon(anteriorId);
  }

  pokemonAleatorio() {
    const id = this.getRandomPokedex();
    this.obtenerPokemon(id);
  }

  getRandomPokedex() {
    return Math.floor(Math.random() * 1010) + 1;
  }
}
