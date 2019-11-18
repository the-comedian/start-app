import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {map} from 'rxjs/operators';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userName = 'Войти';
  public token;

  constructor(private restService: RestService,
              private sessionService: SessionService) {
    this.userName = sessionService.getSessionParam('userName');
    if (!this.userName) {
      this.userName = 'Войти';
    }
    this.token = sessionService.getSessionParam('token');
  }

  /**
   * При нажатии на кнопку "войти"
   */
  public doLogin(login: string, password: string) {
    console.log('login: ' + login);
    console.log('password: ' + password);
    const params = {
      login: login,
      password: password
    };
    return this.restService.doCall('doLogin', params)
      .pipe(
        map((res) => {
          this.userName = res.userName;
          this.token = res.token;
          this.sessionService.setSessionParam('userName', this.userName);
          this.sessionService.setSessionParam('token', this.token);
          return res;
        })
      );
  }

}
