import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  Login(email: string, password: string) {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin'){
      this.isLoggedIn = true;
    }
  }
}
