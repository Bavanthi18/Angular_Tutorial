import { Component, viewChild } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title ="hotelinventoryapp";

  //role = 'Admin';

  @viewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService,){

  }
}

ngOnInit(){
  this.loggerService?.Log('AppComponent.ngOnInit()');
  this.name.nativeElement.innerText = "hilton Hotel";
}
