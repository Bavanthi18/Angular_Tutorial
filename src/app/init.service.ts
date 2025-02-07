import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  config: any;
  constructor() { }

  init() {
    return this.http
    .get('/assets/config.json')
    .pipe(tap((config) => (this.config = config)));

  }
}
