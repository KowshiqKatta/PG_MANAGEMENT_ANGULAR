import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomsComponent } from '../rooms.component';
import { TenantsComponent } from '../../tenants/tenants.component';
import { CommonModule } from '@angular/common';
import { list_of_tenants } from '../../tenants/tenants';
import { RoomsService } from '../rooms.service';


@Component({
  selector: 'app-individual-room',
  standalone: true,
  imports: [RoomsComponent, TenantsComponent],
  templateUrl: './individual-room.component.html',
  styleUrl: './individual-room.component.css'
})
export class IndividualRoomComponent {

  tenants_list = list_of_tenants;

  constructor (private roomsService: RoomsService){}

  @Input ({ required: true}) selected!: boolean;
  parsing(id: string){
    return parseInt(id);
  }
  @Input({ required: false }) room!: {
    id: string,
    floorId: string,
    capacity: string,
    vacancy: boolean,
  };
  @Output() select = new EventEmitter;

  onSelectRoom(){
    this.select.emit(this.room.id);
  }

  status(){
    let room_capacity = this.roomsService.Rooms.find((room) => room.id === this.room.id)!.capacity;

    let room_capacity_num = parseInt(room_capacity);
    let present_capacity = this.tenants_list.filter((obj) => obj.roomnumber === this.room.id).length;
    return true ? present_capacity >= room_capacity_num : false;
  }
}
