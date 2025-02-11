import { Component, Input, OnInit } from '@angular/core';
import { Roomlist } from '../rooms';

@Component({
  selector: 'app-room-list',
  imports: [],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {

  @Input() rooms: Roomlist[] = [];
  
  constructor() {}

  ngOnInit(): void {

  }


}
