import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Имя пользователя
   */
  public login: string;
  /**
   * Пароль
   */
  public password: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * При нажатии на кнопку "войти"
   */
  public doLogin() {
    this.loginService.doLogin(this.login, this.password)
      .subscribe((res: any) => {
        if (res.token) {
          this.router.navigate(['/root']);
        }
      });
  }

}
