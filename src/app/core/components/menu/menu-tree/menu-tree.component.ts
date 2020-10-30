import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../classes/menu.class';

@Component({
  selector: 'menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss']
})
export class MenuTreeComponent implements OnInit {

  private _currentRoute: string;

  /**
   * Список пунктов меню
   */
  @Input() menuList: Menu[] = [];

  @Input() isToggled;
  /**
   * Системное имя роли
   */
  @Input() roleSysname;

  /**
   * Текущий роут
   * @param value
   */
  @Input() set currentRoute(value: string) {
    this._currentRoute = value;
    console.log('current route: ', this._currentRoute);
    this.menuList.forEach((item: Menu) => {
      item.isActive = item.route === this._currentRoute;
    });
  }

  /**
   * При выборе пункта меню
   * @param menuItem
   */
  @Output() menuSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * При выборе пункта меню
   * @param menuItem
   */
  onMenuSelect(menuItem: Menu) {
    this.menuSelect.emit(menuItem);
  }

}
