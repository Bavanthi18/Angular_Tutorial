import { Component } from '@angular/core';
import { RoomsService } from '../Services/rooms.service';
import { NgForm } from '@angular/forms';

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

    AddRoom(roomForm: NgForm) {
      this.roomService.addRoom(this.room).subscribe((data) => {
        this.successmessage = "Room added";
      roomsForm.resetForm({
        roomType: '',
        amenities:'',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,

      });


      });

      }
    }

