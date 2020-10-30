import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../classes/menu.class';
import { MENU_LIST } from '../../../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../menu-tree/menu-tree.component.scss']
})
export class MenuComponent implements OnInit {

  /**
   * Раскрыто ли меню
   */
  public isToggled = false;

  /**
   * Имя пользователя
   */
  @Input() userName: string;
  /**
   * Роль пользователя
   */
  @Input() userRole: string;

  /**
   * Имя сервиса для загрузки меню
   */
  @Input() serviceName: string = 'loadMenu';
  /**
   * Текущий роут
   */
  @Input() currentRoute: string;
  /**
   * Действия при выборе меню
   */
  @Output() menuSelect = new EventEmitter();
  /**
   * Системное имя роли
   */
  @Input() roleSysname;

  menuList: Menu[];
  /**
   * Количество предупреждений
   */
  @Input() statusError = false;
  @Input() warningCount = 0;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('service name is ', this.serviceName);
      this.loadMenuList();
    }, 1);
  }

  /**
   * Загрузить список меню
   */
  private loadMenuList() {
    this.menuList = MENU_LIST;
  }

  /**
   * При выборе пункта меню
   * @param menuItem
   */
  onMenuSelected(menuItem) {
    this.menuSelect.emit(menuItem);
  }

}
