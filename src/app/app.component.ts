import { Component } from '@angular/core';
import { Menu } from './core/components/menu/classes/menu.class';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public projectName = 'start-app';

  /**
   * Текущий роут
   */
  public currentRoute;

  constructor(private router: Router,
              public loginService: LoginService) {
    // при смене роута меняется currentRoute,
    // из-за чего происходит выбор нужного пункта меню
    this.router.events.subscribe((value: any) => {
      if (value instanceof NavigationEnd) {
        this.currentRoute = value.url;
      }
    });

  }

  /**
   * При выборе меню
   * @param customEvent
   */
  onMenuSelect(event) {
    const menuItem = event;
    console.log('selected item is: ', menuItem);
    if (menuItem.route) {
      this.router.navigate([menuItem.route]);
      // window.open(menuItem.route, '_self');
    }
  }

}

export const MENU_LIST: Menu[] = [
  {
    route: '/student',
    title: 'Студенты',
    children: null,
    roles: null
  },
  {
    route: '/student/edit',
    title: 'Задать студента',
    children: null,
    roles: null
  }
];
