import { HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {



  constructor() {}



  interceptors(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    console.log('Request Interceptor', request)


    if(requestmethod === 'POST'){
      const newRequest = request.clone({
        headers: new HttpHeaders({token : 'sadjduesf6655565596'})

      });
   
    return next.handle(newRequest);
  }
  return next.handle(request);
}
}
