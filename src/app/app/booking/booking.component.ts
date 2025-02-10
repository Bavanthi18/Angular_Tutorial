import { FormBuilder, FormGroup } from "@angular/forms";
import { ConfigService } from "../../config.service";



export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private configService: ConfigService, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.BookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingstatus: [''],
      mobilenumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],



    });
  }
}
