import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: true}) form;

  /**
   * Имя пользователя
   */
  public login: string;
  /**
   * Пароль
   */
  public password: string;

  constructor(private loginService: LoginService,
              private router: Router,
              private loggerService: LoggerService,
              private restService: RestService) {
  }

  ngOnInit() {
    this.loggerService.info('info');
    this.loggerService.warn('warn');
    this.loggerService.error('error');
  }

  /**
   * При нажатии на кнопку "войти"
   */
  public doLogin() {
    const source = this.restService.doSseCall('stream', this.login);
    source.addEventListener('message', function(e) {
      // Assuming we receive JSON-encoded data payloads:
      const payload = JSON.parse(e.data);
      console.log(payload);
    });
    source.stream();
    // this.loginService.doLoginOffline();
    // this.router.navigate(['']);
    // this.loginService.doLogin(this.login, this.password)
    //   .subscribe((res: any) => {
    //     if (res.token) {
    //       this.router.navigate(['/root']);
    //     }
    //   });
  }

}
