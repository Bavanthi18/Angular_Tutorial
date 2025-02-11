import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from "@angular/forms";
import { BookingService } from "../booking.service";
import { exhaustMap, mergeMap, switchMap } from "rxjs";


@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./BookingComponent.sccs'],
})



export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }


  constructor(private configService: ConfigService private fb: FormBuilder,
    private BookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
    roomId: new FormControl({ value:'2', disabled: true},{validators: [Validators.required] }),
    guestEmail: ['', [Validators.required, Validators.email]],
    checkinDate: [''],
    checkoutDate: [''],
    bookingstatus: [''],
    mobilenumber: [''],
    guestName: [''],
    address: this.fb.group({
      addressline1: [''],
      addressline2: [''],
      city: [''],
      state: [''],
      country: [''],
      zipcode: [''],

    }),
    guests: this.fb.array([this.fb.group({ guestName: [''],
      age: new FormControl(''),
    })]),

    });

  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.BookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => { console.log('data')})


    this.bookingForm.reset({
    roomId: ['2'],
    guestEmail: '',
    checkinDate: '',
    checkoutDate: '',
    bookingstatus: '',
    mobilenumber: '',
    guestName: '',
    address: this.fb.group({
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    }),
  }
}

  getBookingData(){
    this.bookingForm.patchValue({
    roomId: ['2'],
    guestEmail: 'test@gmail.com',
    checkinDate: '',
    checkoutDate: '',
    bookingstatus: '',
    mobilenumber: '',
    guestName: '',
    address: this.fb.group({
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    },

    this.guests: [],
    tnc: false,

    }),
    this.getBookingData();

    //this.bookingForm.valueChanges.subscribe((data) => {
      //this.BookingService.bookRoom(data).subscribe((data) => {})
  //  });

  this.bookingForm.valueChanges.pipe(
    exhaustMap((data) => this.BookingService.bookRoom(data))
  ).subscribe((data) => console.log(data));


  }


  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('')})
    )

    addGuestControl() {

        return this.fb.group({ guestName: [''], age: new FormControl('')});

  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl('') });

  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }


}
function addGuestControl() {
  throw new Error("Function not implemented.");
}

function addPassport() {
  throw new Error("Function not implemented.");
}

