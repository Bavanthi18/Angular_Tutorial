import { NgModule, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { BookingRoutingModule } from './BookingRoutingModule';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule, MatPseudoCheckbox, MatPseudoCheckboxModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    BookingComponent
  ],

  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatformFieIdModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatPseudoCheckboxModule,
    HttpClientModule,

  ],
})

export class BookingModule { }
