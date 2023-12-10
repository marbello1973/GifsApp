import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  constructor(private gifsService: GifService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }
}
