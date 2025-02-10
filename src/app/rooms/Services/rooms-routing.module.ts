import { Component, NgModule, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RoomsAddComponent } from "../rooms-add/rooms-add.component";
import { RoomsBookingComponent } from "../rooms-booking/rooms-booking.component";
import { RoomsComponent } from "../rooms.component";


const routes: Routes = [
  { path: 'rooms',
    Component: RoomsComponent
    children: [
      {path: 'rooms/:roomid', Component: RoomsBookingComponent}
      {path: 'add', Component: RoomsAddComponent}

    ];

  },
  { path: 'rooms/add', Component: RoomsAddComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoomsRoutingModule{ }
