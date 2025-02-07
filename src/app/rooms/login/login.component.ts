import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

}
