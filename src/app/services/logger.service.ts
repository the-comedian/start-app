import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  /**
   * Информационный лог
   */
  public info(value, ...data) {
    if (!environment.production) {
      console.log(value, ...data);
    }
  }

  /**
   * Предупреждение
   */
  public warn(value, ...data) {
    if (!environment.production) {
      console.warn(value, ...data);
    }
  }

  /**
   * Ошибка
   */
  public error(value, ...data) {
    console.error(value, ...data);
  }

}
