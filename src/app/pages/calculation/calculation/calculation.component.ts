import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

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
