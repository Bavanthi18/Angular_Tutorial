import { AfterContenetInit,  Component, ContentChild, Host, OnInit, ViewChild };
import { EmployeeComponent } from "../../employee/employee.components";
import { RoomsService } from "../../rooms/Services/rooms.service";

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sccs'],
  providers : [RoomsService];

})

export class ContainerComponent implements OnInit, AfterContentinit {
  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;

  constructor(@Host() private roomsService: RoomsService) {}

  ngOnInit() : void {

  }

  ngAfterContentinit() : void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }
}


