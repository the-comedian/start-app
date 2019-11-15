import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';

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

  constructor(private restService: RestService) {
  }

  ngOnInit() {
  }

  /**
   * При нажатии на кнопку "войти"
   */
  public doLogin() {
    console.log('login: ' + this.login);
    console.log('password: ' + this.password);
    const params = {
      login: this.login,
      password: this.password
    };
    this.restService.doCall('doLogin', params)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

}
