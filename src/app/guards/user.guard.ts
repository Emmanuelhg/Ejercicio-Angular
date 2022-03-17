import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyAppService } from 'src/app/services/my-app.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private myAppService: MyAppService) { 
    
  }
  
  canActivate():any{
    if(this.myAppService.isAuthenticated([])){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
