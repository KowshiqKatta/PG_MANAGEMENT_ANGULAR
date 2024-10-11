import { Injectable } from "@angular/core";
@Injectable({providedIn: 'root'})

export class RoomsService{
    public Rooms = [
        {
          id: '101',
          floorId: '1',
          capacity: '2',
          vacancy: false
        },
        {
            id: '102',
            floorId: '1',
            capacity: '2',
            vacancy: false
        },
        {
            id: '103',
            floorId: '1',
            capacity: '3',
            vacancy: false
        },
        {
            id: '104',
            floorId: '1',
            capacity: '3',
            vacancy: false
        },
        {
            id: '201',
            floorId: '2',
            capacity: '2',
            vacancy: false
          },
          {
              id: '202',
              floorId: '2',
              capacity: '2',
              vacancy: false
          },
          {
              id: '203',
              floorId: '2',
              capacity: '3',
              vacancy: false
          },
          {
              id: '204',
              floorId: '2',
              capacity: '3',
              vacancy: false
          },
          {
            id: '301',
            floorId: '3',
            capacity: '2',
            vacancy: false
          },
          {
              id: '302',
              floorId: '3',
              capacity: '2',
              vacancy: false
          },
          {
              id: '303',
              floorId: '3',
              capacity: '3',
              vacancy: false
          },
          {
              id: '304',
              floorId: '3',
              capacity: '3',
              vacancy: false
          },
          {
            id: '401',
            floorId: '4',
            capacity: '2',
            vacancy: false
          },
          {
              id: '402',
              floorId: '4',
              capacity: '2',
              vacancy: false
          },
          {
              id: '403',
              floorId: '4',
              capacity: '3',
              vacancy: false
          },
          {
              id: '404',
              floorId: '4',
              capacity: '3',
              vacancy: false
          },
          {
            id: '501',
            floorId: '5',
            capacity: '2',
            vacancy: false
          },
          {
              id: '502',
              floorId: '5',
              capacity: '2',
              vacancy: false
          },
          {
              id: '503',
              floorId: '5',
              capacity: '3',
              vacancy: false
          },
          {
              id: '504',
              floorId: '5',
              capacity: '3',
              vacancy: false
          },
          {
            id: '601',
            floorId: '6',
            capacity: '2',
            vacancy: false
          },
          {
              id: '602',
              floorId: '6',
              capacity: '2',
              vacancy: false
          },
          {
              id: '603',
              floorId: '6',
              capacity: '3',
              vacancy: false
          },
          {
              id: '604',
              floorId: '6',
              capacity: '3',
              vacancy: false
          }
      ];
      getFloorRooms(floorId: string){
        return this.Rooms.filter((room) => room.floorId === floorId);
      }
}