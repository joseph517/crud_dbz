import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CharacterInterface } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList: CharacterInterface[] = []

  @Output()
  public onDeleteEmitCharacter: EventEmitter<string> = new EventEmitter()



  onDeleteCharacter(id?:string): void {
    if(!id) return
    this.onDeleteEmitCharacter.emit(id)
  }

}
