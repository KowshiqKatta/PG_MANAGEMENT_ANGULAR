import { Component, Input } from '@angular/core';
import { IndividualRoomComponent } from '../rooms/individual-room/individual-room.component';
import { list_of_tenants } from './tenants';
import { RoomsService } from '../rooms/rooms.service';
import { AddtenantsComponent } from './addtenants/addtenants.component';

@Component({
  selector: 'app-tenants',
  standalone: true,
  imports: [IndividualRoomComponent, AddtenantsComponent],
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css'
})
export class TenantsComponent {
  tenants_list = list_of_tenants;
  @Input () roomId!: string;
  showForm: boolean = false;
  constructor(public roomsService: RoomsService) {}

  selectedRoomTenants(roomId: string){
    let x = this.tenants_list.filter((tenant) => tenant.roomnumber === this.roomId);
    return x;
  }

  showFormComponent() {
    this.showForm = true;
  }

  closeFormComponent() {
    this.showForm = false;
  }

  onAddTenant(tenantData: {
    name: string,
    age: string,
    gender: string,
    aadharcard: string,
    phonenumber: string,
    emailaddress: string,
    date_of_joining: string,
    type_of_room_alloted: string,
    roomnumber: string
  }){
    list_of_tenants.push(tenantData);
    this.closeFormComponent();
  }

  verify(id: string){
    let room_capacity = this.roomsService.Rooms.find((room) => room.id === this.roomId)!.capacity;

    let room_capacity_num = parseInt(room_capacity);
    let present_capacity = this.tenants_list.filter((obj) => obj.roomnumber === this.roomId).length;
    return true ? present_capacity < room_capacity_num : false;
  }
}
