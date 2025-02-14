
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.components';
import { RoomsComponent } from '../rooms/rooms.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { RoomsBookingComponent } from '../rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from '../rooms/rooms-add/rooms-add.component';
import { LoginComponent } from '../rooms/login/login.component';



const routes : Routes = [
  { path: 'employee', component: EmployeeComponent},

  { path: 'login', component: LoginComponent},

  { path: 'rooms',
    LoadChildren: ()=>
      import{ path: 'rooms/rooms.module'}.then((m) => m.RoomsModule),
  },


  { path: '**', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule{}
