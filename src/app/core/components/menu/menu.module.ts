import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuTreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {
}
