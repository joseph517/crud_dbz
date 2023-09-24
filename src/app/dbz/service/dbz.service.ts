import { Injectable } from '@angular/core';
import { CharacterInterface } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

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

  onNewCharacter(character: CharacterInterface):void{
    console.log(character)
    this.characters.push(character)
  }

  onDeleteCharacter(i:number):void{
    this.characters.splice(i,1)
  }
}
