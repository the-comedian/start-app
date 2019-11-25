import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  public selectItems = [
    {
      id: 1,
      title: 'yay'
    },
    {
      id: 2,
      title: 'hello'
    },
    {
      id: 3,
      title: 'this'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * При нажатии на кнопку
   */
  public onButtonClick() {
    window.alert('CLICK!!!');
  }

}
