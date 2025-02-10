import { ActivatedRouteSnapshot, CanMatchFn, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { LoginService } from './rooms/login/login.service';
import { Observable } from 'rxjs';



export const loginGuard: CanMatchFn = (route, segments) => {
  return true;
};

constructor(private loginService: LoginService,
  private router: Router) {}


  mapToCanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean |UrlTree>
    return this.LoginService.isLoggedIn? true: this.router.navigate(['/login']);
  }

 canLoad(
  route: RouterStateSnapshot,
  segment: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean |UrlTree>
  return true;
 }
 )
