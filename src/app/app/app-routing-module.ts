
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.components';
import { RoomsComponent } from '../rooms/rooms.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from '../rooms/rooms-add/rooms-add.component';



const routes : Routes = [
  { path: 'employee', component: EmployeeComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'rooms/:id', component:RoomsBookingComponent},
  { path: 'rooms/add', component: RoomsAddComponent},
  { path: '', redirectTo: '/rooms', pathMatch: 'full'},
  { path: '**', redirectTo: '/rooms'},
  { path: '**', component: NotfoundComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{}
