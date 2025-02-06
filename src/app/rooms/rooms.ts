export interface Room
{
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}
export interface Roomlist{
    roomNumber : number;
    roomType : String;
    amenities : String;
    price : number;
    photos : String;
    checkinTime : Date;
    checkout : Date;

}
