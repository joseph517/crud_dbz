import { Injectable } from '@angular/core';

import { v4 as uuidV4 } from 'uuid';

import { CharacterInterface } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: CharacterInterface[] = [
    {
      id: uuidV4(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuidV4(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuidV4(),
      name: 'Vegeta',
      power: 9000
    }
  ]

  onNewCharacter(character: CharacterInterface): void {
    const newCharacter:CharacterInterface = { id:uuidV4(), ...character }
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(characters => characters.id !== id)
  }
}
