import { Injectable } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Student } from './classes/student.class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private restService: RestService) {
  }

  /**
   * Сохранение студента
   */
  public saveStudent(student: Student) {
    const params = {
      student: student
    };
    return this.restService.doCall('saveStudent', params);
  }

}
