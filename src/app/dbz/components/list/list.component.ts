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
  public onDeleteEmitCharacter: EventEmitter<number> = new EventEmitter()



  onDeleteCharacter(i: number): void {
    this.onDeleteEmitCharacter.emit(i)
  }

}
