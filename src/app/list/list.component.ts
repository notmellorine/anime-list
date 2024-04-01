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
    this.animesService.getAnimes().subscribe(res => console.log(res))

    this.animesService.setAnimeTitles('titulo');
    console.log(titulo);
  }

}
