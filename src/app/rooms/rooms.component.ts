import { Component, QueryList, SkipSelf, ViewChild, viewChildren } from '@angular/core';
import { Room } from './rooms';
import { RoomsService } from './Services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements onInit {

  hotelName = 'Grand Hotel';

  numberofRooms = 10;

  hideRooms = true;

  selectedRoom!: Roomlist;

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

title = "Rooms List";

roomList: RoomList[] = [
  {
    roomNumber : 1,
    roomType : 'Deuluxe room',
    amenities : 'Ac, Free Wifi',
    price : 5000,
    photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsthotelsmalta.com%2Ffr%2Fapartment-or-hotel-room-which-is-better%2F&psig=AOvVaw2IgC8iCzwvOi1ceh-L-BlE&ust=1738836078186000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjb66ejrIsDFQAAAAAdAAAAABAE',
    checkinTime : new Date('11-Nov-2023'),
    checkout : new Date('12-Nov-2023'),
  },

  {
    roomNumber : 2,
    roomType : 'Deuluxe room',
    amenities : 'Ac, Free Wifi',
    price : 5000,
    photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsthotelsmalta.com%2Ffr%2Fapartment-or-hotel-room-which-is-better%2F&psig=AOvVaw2IgC8iCzwvOi1ceh-L-BlE&ust=1738836078186000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjb66ejrIsDFQAAAAAdAAAAABAE',
    checkinTime : new Date('11-Nov-2023'),
  }
];
room: any;

title= "Room list";

roomList: RoomList[] = [];

stream = new Observable(observer => {
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  //observer.console.error();

})

@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

@viewChildren(HeaderComponent) headerComponent!: QueryList<HeaderComponent>;



error: string='';

subscription: Subscription;

error$ = new Subject<string>();

gerError$ = this.error$.asObservable();

rooms$ = this.roomsService.getRooms$.pipe(
  catchError((err) => {

    this.error$.next(err.mesage);
    return of([]);
  });
);

roomsCount$ = this.roomsService.getRooms$.pipe(
  map((rooms) => rooms.length)
)

 constructor(@SkipSelf() private roomsService : RoomsService) {}

    ngOnInit(): void {
      this.stream.subscribe((data) => console.log(data));
      this.stream.subscribe((data) => console.log(data));
      this.roomList = this.roomsService.getRooms();
    }

    ToggleEvent() {
      this.hideRooms = !this.hideRooms;
    }


  ngDoCheck() {

      console.log('on changes is called');

  }

  ngAfterViewInit(){
    this.headerComponent.title = "Rooms View";
  }

  ngAfterViewChecked() {

  }


  selectRoom(room:RoomList) {
    this.selectedRoom = RoomsComponent;
  }

  addRoom() {
    const room: RoomList = {
      //roomNumber : 4,
      roomType : 'Deuluxe room',
      amenities : 'Ac, Free Wifi',
      price : 5000,
      photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsthotelsmalta.com%2Ffr%2Fapartment-or-hotel-room-which-is-better%2F&psig=AOvVaw2IgC8iCzwvOi1ceh-L-BlE&ust=1738836078186000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjb66ejrIsDFQAAAAAdAAAAABAE',
      checkinTime : new Date('11-Nov-2023'),
    }

    editRoom(){
      const room: RoomList = {
        roomNumber : 2,
        roomType : 'Deuluxe room',
        amenities : 'Ac, Free Wifi',
        price : 5000,
        photos : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsthotelsmalta.com%2Ffr%2Fapartment-or-hotel-room-which-is-better%2F&psig=AOvVaw2IgC8iCzwvOi1ceh-L-BlE&ust=1738836078186000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjb66ejrIsDFQAAAAAdAAAAABAE',
        checkinTime : new Date('11-Nov-2023'),
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomlist = data;
    });
  }

  deleteRoom(){
    this.roomsService.deleteRoom('2').subscribe((data) => {
      this.roomList = data;
    });
  }
this.roomService.addRoom(room).subscribe((data)=> {
  this.roomList = data;
});
}


