import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private httpClient: HttpClient) {}

  getAnimes() {
    return this.httpClient.get('https://kitsu.io/api/edge/anime')
  }
}
