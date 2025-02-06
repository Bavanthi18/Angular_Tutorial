import { Injectable, Injectable } from '@angular/core';

@Injectable({
  providerIn: 'root'
})

export class LoggerService {
  constructor() {}

  Log(msg: string) {
    console.log(msg);
  }
}
