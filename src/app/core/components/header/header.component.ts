import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = 'Войти';

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
