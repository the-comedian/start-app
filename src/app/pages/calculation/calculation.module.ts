import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CalculationRoutingModule} from './calculation-routing.module';
import {CalculationComponent} from './calculation/calculation.component';
import {FormsModule} from '@angular/forms';
import {FormControlsModule} from '../../core/form-controls/form-controls.module';


@NgModule({
  declarations: [CalculationComponent],
  imports: [
    CommonModule,
    CalculationRoutingModule,
    FormsModule,
    FormControlsModule
  ]
})
export class CalculationModule {
}
