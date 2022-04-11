import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn = false;
  constructor(private userService :  TokenService,private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.isLoggedIn = !!this.userService.getToken();
      if (!this.isLoggedIn) {
        this.router.navigateByUrl('/login');
        return false;
      }
  
    return true;
     
  }
}
