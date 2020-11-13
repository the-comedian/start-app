import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student.class';
import { StudentGroup } from '../classes/student-group.class';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  public student: Student;

  constructor(private studentService: StudentService) {
    this.student = new Student();
    this.student.group = new StudentGroup();
  }

  ngOnInit(): void {
  }

  /**
   * Сохранить студента
   */
  public saveStudent() {
    this.studentService.saveStudent(this.student)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
