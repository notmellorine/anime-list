import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../interfaces/Anime';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  animeData!: Anime[];

  constructor(private http: HttpClient) {}

  getAnimes():Observable<any> {
    const url = 'https://kitsu.io/api/edge/anime'
    return this.http.get<any>(url);
  }

  setAnimes(animes: Anime[]) {
    this.animeData = animes;
    console.log(this.animeData)
  }

  setAttributes() {
    return this.http.get('https://kitsu.io/api/edge/anime').pipe(
      map((res: any) => {
        return res.data.map((item: any) => item.attributes);
      })
    )
  }
}
