import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {

  @Output()
  public onNewEmitCharacter: EventEmitter<CharacterInterface> = new EventEmitter()

  public characterInput: CharacterInterface = {
    name: '',
    power: 0
  }

  emitCharacter():void{
    if(this.characterInput.name.length === 0) return
    if(this.characterInput.power <= 0) return
    this.onNewEmitCharacter.emit(this.characterInput)
    this.setInput()
  }

  setInput():void{
    this.characterInput = {name:'', power: 0 }
  }
}
