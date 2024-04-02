import { Component } from '@angular/core';
import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  titulo!: string;

  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    this.animesService.getAnimes().subscribe((res: any) => this.animesService.setAnimes(res.data))
    //this.animesService.getAnimes().subscribe(res => console.log(res))
    let animeTitulos: any = this.animesService.animeData.map(animes => animes.canonicalTitle);
    console.log(animeTitulos)
  }

  mountData() {

  }

}
