import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private httpClient: HttpClient) {}

  getPokemonPage(url: string = 'https://pokeapi.co/api/v2/pokemon/') {
    return this.httpClient.get(url);
  }

  getPokemon(id: number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.httpClient.get(url);
  }
}
