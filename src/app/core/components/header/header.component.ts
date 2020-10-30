import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() projectName = 'TEST';
  @Output() onProjectNameClick = new EventEmitter();

  userName = 'Войти';

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  /**
   * Реакция на клик по имени проекта
   */
  public handleClick() {
    console.log('click');
    this.onProjectNameClick.emit('click1');
  }

}
