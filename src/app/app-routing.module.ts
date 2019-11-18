import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './services/auth.guard';


/**
 * Задаются пути до компонентов
 */
const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'root',
      loadChildren: () => import('./pages/root/root.module').then((m => m.RootModule)),
      canActivate: [AuthGuard]
    },
    {
      path: 'calc',
      loadChildren: () => import('./pages/calculation/calculation.module').then((m => m.CalculationModule))
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
