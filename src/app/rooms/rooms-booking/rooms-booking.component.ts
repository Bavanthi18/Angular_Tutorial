import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;

  id$ = this.router.paramMap.pipe(map((params)=> params.get('roomid')));

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
      this.router.params.subscribe((params) => { this.id = params['roomid']});
  }
}
