import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './Environments/environment';
import { AppModule } from './app/rooms/app.module';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  if (environment.production) {
    enableProdMode();
  }

  platformBrowser().bootstrapModule(AppModule)
   .catch(err => console.error(err));
