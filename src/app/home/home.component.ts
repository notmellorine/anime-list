import { Component, OnInit } from '@angular/core';
import { AnimesService } from './../services/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animesTitle: any;
  animesDescription: any;

  constructor(private animesService: AnimesService) {}

  ngOnInit(): void {
    this.animesService.carrouselAtributtes().subscribe((attributes) => {
      this.animesTitle = attributes.canonicalTitle;
      this.animesDescription = attributes.description;
      console.log(attributes)
    })
  }

  mountData() {
    let animeTitle
  }
}
