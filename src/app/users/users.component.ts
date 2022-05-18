import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/Interfaces/Student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
students:StudentInterface[]=[]

constructor(private studentService:StudentService) { }

  ngOnInit(): void {
this.students= this.studentService.getStudents()
  }

}
