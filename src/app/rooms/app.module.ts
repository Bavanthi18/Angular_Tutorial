import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { ContainerComponent } from "../app/container/container.component";
import { EmployeeComponent } from "../employee/employee.components";
import { RoomsComponent } from "./rooms.component";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "../app/AppConfig/appconfig.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { RequestInterceptor } from "../request.interceptor";
import bootstrap from "../../main.server";

@
NgModule
({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
    provide: APP_SERVICE_CONFIG,
    useVAlue: APP_CONFIG,

  },
  {
    provide: RequestInterceptor,
    useValue: HTTP_INTERCEPTORS,
    multi: true,
  }
],
  bootstrap: [AppComponent],
})
export class AppModule
 {}
