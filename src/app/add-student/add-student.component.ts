import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
isvalid=false
  constructor(private studentService:StudentService ,private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(name:string, age:number){
   if(name.length===0){
     this.isvalid=true
   }
   else{
    this.studentService.addStudent(name,age)
    this.router.navigate(['users'])
   }
  
  }

}
