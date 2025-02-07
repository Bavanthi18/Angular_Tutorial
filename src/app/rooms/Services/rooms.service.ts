import { Injectable } from '@angular/core';
import { Roomlist } from '../rooms';
import { environment } from '../../../Environments/environment';
import { APP_SERVICE_CONFIG } from '../../app/AppConfig/appconfig.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomlist : RoomList[] = [];
  //headers = new HttpHeaders({token : 'sadjduesf6655565596'});
  getRooms$ = this.http.get<Roomlist[]>('/api/rooms', {
    headers: this.headers,
  }).pipe(shareReplay));

    /*{
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
    }*/




  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig ,
  private http: HttpClient){
    console.log("this.config.apiEndpoint");

    console.log("Room service Initialized");

  }

  getRooms(){
    return this.http.get.<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList){
    return this.http.post.<RoomList[]>('/api/rooms', rooms);
  }
  editRoom(room: RoomList){
    return this.http.put.<RoomList[]>(`/api/rooms${room.roomNumber}`, rooms);
  }

  delete(room: RoomList){
    return this.http.delete.<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`,

    reportProgress: true,

  }
);


  return this.http.request(request);
}
}

