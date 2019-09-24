import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { globalRoutesNames } from 'src/global.routes.names';

@Injectable({
  providedIn: 'root'
})
export class UnauthenticatedGuard implements CanActivateChild, CanActivate {
  
  constructor(private auth : AuthService, private router : Router) {
    
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggedIn)
    {
      this.router.navigate([globalRoutesNames.USER.url + globalRoutesNames.USER.children.HABBO.directURL]);
      return false;
    }

    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.auth.isLoggedIn)
    {
      this.router.navigate([globalRoutesNames.USER.url + globalRoutesNames.USER.children.HABBO.directURL]);
      return false;
    }
  
    return true;
  }
  
}
