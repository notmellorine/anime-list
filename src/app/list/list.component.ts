import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  animes = this.animesService.animeData;

  constructor(private animesService: AnimesService) {}

  ngOnInit() {
    this.animesService.setAttributes().subscribe((attributes) => {
      this.animes = attributes;
      console.log(this.animes)
    })
  }
}
