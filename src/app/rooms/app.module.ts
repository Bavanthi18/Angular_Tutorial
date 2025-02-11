import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { ContainerComponent } from "../container/container.component";
import { EmployeeComponent } from "../employee/employee.components";
import { RoomsComponent } from "./rooms.component";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "../app/AppConfig/appconfig.service";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { RequestInterceptor } from "../request.interceptor";
import bootstrap from "../../main.server";
import { AppRoutingModule } from "../app/app-routing-module";
import { InitService } from "../init.service";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouteConfigToken } from "./Services/routeConfig";
import { HeaderComponent } from "../header/header.component";

function initFactory(initService: InitService){
  return () => initService.init();
}

@NgModule
({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    FormsModule,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG,

  },
  {
    provide: RouteConfigToken,
    useValue: { title: 'Home'},
  }
  {
    provide: RequestInterceptor,
    useValue: HTTP_INTERCEPTORS,
    multi: true,
  },

  {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true,
  }
],
  bootstrap: [AppComponent],
})

export class AppModule
 {}
