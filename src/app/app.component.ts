import { Component, ElementRef, viewChild } from '@angular/core';
import { LoggerService } from './logger.service';
import { ConfigService } from './config.service';
import { Router } from 'express';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hinv-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
@viewChild('name',  { static: true }) name!: ElementRef;

constructor(
@Optional() private loggerService: LoggerService),
@Inject(localStorageToken) private localStorage: any,
private initService: InitService,
private configService: ConfigService,
private router: Router

)
{
  console.log(initService.config);
}

ngOnInit() {
  


}



this.LoggerService?.Log('AppComponent.ngOnit()');
this.name.nativeElement.innerText = 'hilton Hotel';

this.localStorage.setItem('name', 'Hilton Hotel');


