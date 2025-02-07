import { Component } from '@angular/core';
import { RoomsService } from '../Services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  imports: [],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {


    room: RoomList = {
      roomType: '',
      amenities: '',
      checkinTime: '',
      checkoutTime: '',
      price: '',
    };

    successmessage : string ='';

    constructor(private roomService: RoomsService) {}

    ngOnInit(): void {

    }

    AddRoom() {
      this.roomService.addRoom(this.room).subscribe((data) => this.successmessage = "Room added")

      }
    }

