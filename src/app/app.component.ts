import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FloorsListComponent } from './floors-list/floors-list.component';
import { LIST_OF_FLOORS } from './list_of_floors';
import { FloorComponent } from './floors-list/floor/floor.component';
import {RoomsComponent} from './rooms/rooms.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule, FloorsListComponent, FloorComponent, RoomsComponent],
  standalone: true,
})
export class AppComponent {
  floors = LIST_OF_FLOORS;
  selectedFloorId ?:string;

  get selectedFloor(){
    return this.floors.find((floor) => floor.id === this.selectedFloorId)!;
  }
  onSelectFloor(id: string){
    this.selectedFloorId = id;
  }
}