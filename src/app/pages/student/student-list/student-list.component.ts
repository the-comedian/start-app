import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Student } from '../classes/student.class';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public columnDefs: ColDef[] = [
    {
      headerName: 'ФИО',
      field: 'fullName'
    },
    {
      headerName: 'Возраст',
      field: 'age'
    },
    {
      headerName: 'Номер билета',
      field: 'personalNumber'
    }
  ];

  public rowData: Student[] = [
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    }, {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    },
    {
      age: 10,
      fullName: 'Вася',
      personalNumber: '1337'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
