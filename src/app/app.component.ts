import { Component, ElementRef, viewChild } from '@angular/core';
import { LoggerService } from './logger.service';
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
@viewChild('name',  {static: true}) name!: ElementRef;

constructor(@Optional() private loggerService: LoggerService),
@Inject(localStorageToken) private localStorage: any,
private initService: InitService
) {
  console.log(initService.config);
}




