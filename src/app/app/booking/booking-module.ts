import { NgModule, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { BookingRoutingModule } from './BookingRoutingModule';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    BookingComponent
  ],

  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})

export class BookingModule { }
