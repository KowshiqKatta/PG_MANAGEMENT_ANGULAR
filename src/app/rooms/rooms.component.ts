import { Component, Input } from '@angular/core';
import {RoomsService} from './rooms.service';
import { IndividualRoomComponent } from './individual-room/individual-room.component';
import { TenantsComponent } from '../tenants/tenants.component';
import { list_of_tenants } from '../tenants/tenants';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [IndividualRoomComponent, TenantsComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})

export class RoomsComponent {
  selectedRoomId !: string;
  parsing(id: string){
    return parseInt(id);
  }

  @Input({required: true}) floorId!: string;
  @Input({required: true}) floor!: string;
  
  constructor(public floorsRooms: RoomsService){}

  selectedFloorRooms(floorId: string){
    let x = this.floorsRooms.Rooms.filter((room) => room.floorId === this.floorId);
    return x;
  }

  onSelectRoom(id: string){
    this.selectedRoomId = id; 
  }
  // get selectedFloorRooms(){
  //   let floorList = this.floorsRooms.getFloorRooms(this.floorId);
  //   return floorList;
  // }
}
