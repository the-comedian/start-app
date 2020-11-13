import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { FormControlsModule } from '../../core/form-controls/form-controls.module';

@NgModule({
  declarations: [StudentListComponent, EditStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AgGridModule,
    FormsModule,
    FormControlsModule
  ]
})
export class StudentModule {
}
