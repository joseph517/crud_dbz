import { Component } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: CharacterInterface[] = [
    {
    name: 'Krilin',
    power: 1000
    },
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9000
    }
  ]


}
