import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { StudentInterface } from 'src/Interfaces/Student';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
isselected:boolean=false
ids!:number
student!:StudentInterface
  constructor(private studentService:StudentService, 
    private route :ActivatedRoute,
    private router:Router
    ) { }
 
  ngOnInit(): void {
   this.route.params.subscribe((param:Params)=>{
    
     this.ids=+param['id']
      this.student=this.studentService.getStudent(param['id'])

   })
  }

  editUser(){
     this.router.navigate([ 'edit',],{relativeTo:this.route ,queryParamsHandling:'preserve'})
  }

  deleteuser(){
   this.studentService.deleteStudent(this.ids)
   this.router.navigate([ 'edit'],{relativeTo:this.route})
  }

}
