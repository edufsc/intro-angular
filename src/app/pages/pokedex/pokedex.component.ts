import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemons: any = [];
  totalPokemons: number = 0;
  next: string | null = null;
  previous: string | null = null;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    console.log('Pokedex iniciada');
    this.cambiarPagina('https://pokeapi.co/api/v2/pokemon/');
  }

  paginaSiguiente() {
    // si hay página siguiente, cambiamos a la página siguiente
    if (this.next) {
      this.cambiarPagina(this.next);
    }
  }
  paginaAnterior() {
    if (this.previous) {
      this.cambiarPagina(this.previous);
    }
  }

  cambiarPagina(url: string) {
    this.pokedexService.getPokemonPage(url).subscribe((paginaPokemon: any) => {
      console.log({ paginaPokemon });
      this.pokemons = paginaPokemon.results;
      this.totalPokemons = paginaPokemon.count;
      this.next = paginaPokemon.next;
      this.previous = paginaPokemon.previous;
    });
  }

  getIdFromURL(url: string) {
    if (url) {
      let partesURL = url.split('/');
      return parseInt(partesURL[6]);
    } else {
      return -1;
    }
  }
}
