import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../interfaces/Anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  animeData!: Anime[];

  constructor(private httpClient: HttpClient) {}

  getAnimes() {
    return this.httpClient.get('https://kitsu.io/api/edge/anime')
  }

  setAnimes(animes: Anime[]) {
    this.animeData = animes;
    console.log(this.animeData)
  }

}
