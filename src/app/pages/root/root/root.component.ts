import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  /**
   * \Массив, который нужно вывести
   */
  public tempArr = null;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Метод для заполнения массива
   */
  public fillArr() {
    this.tempArr = [
      {
        key: 'key1',
        value: 'val1'
      },
      {
        key: 'key2',
        value: 'val2'
      },
      {
        key: 'key3',
        value: 'val3'
      },
      {
        key: 'key4',
        value: 'val4'
      },
      {
        key: 'key5',
        value: 'val5'
      }
    ];
  }

}
