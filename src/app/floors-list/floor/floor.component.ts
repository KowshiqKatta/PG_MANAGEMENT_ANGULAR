import {Component, Input, Output, EventEmitter, output} from '@angular/core'
import { LIST_OF_FLOORS } from '../../list_of_floors';
import { type Floor } from './floor.model';

@Component({
  selector: 'app-floor',
  standalone: true,
  imports: [],
  templateUrl: './floor.component.html',
  styleUrl: './floor.component.css'
})
export class FloorComponent {
  @Input ({ required: true}) floor!:Floor;
  @Input ({ required: true}) selected!: boolean;

  @Output () select = new EventEmitter;

  onSelectFloor(){
    this.select.emit(this.floor.id);
  }
}
