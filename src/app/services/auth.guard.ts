import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  /**
   * Возможно ли совершить переход
   * @param next - роут, на который нужно сделать переход
   * @param state
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let result = false;
    if (this.loginService.token) {
      result = true;
    } else {
      this.router.navigate(['/login']);
    }
    return result;
  }

}
