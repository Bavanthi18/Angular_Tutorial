import { Component, onInit, Self} from '@angular/core';
import { RoomsService } from '../rooms/Services/rooms.service';

@component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sccs'],
  providers : [RoomsService];

})

export class EmployeeComponent implements onInit {
  empName: string = 'John';

  constructor(@Self() private roomService : RoomsService) {}

  ngOnInit(): void {

  }
}
