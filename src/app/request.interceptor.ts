import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {



  constructor() {}

  interceptors(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    console.log('Request Interceptor', request)

    return next.handle(request);
  }
};
