import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { StudentService } from 'src/app/Services/student.service';
import { StudentInterface } from 'src/Interfaces/Student';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
isvalid=false
id!:string;
student?:StudentInterface
studentname:string =''
studentage:number=0
allowEdit=false

  constructor(private studentService:StudentService , private toastService:ToastService
    ,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe((param:Params)=>{
      this.id=param['id']
      this.student= this.studentService.getStudent(this.id)
      if(this.student){
        this.studentname=this.student.name
      this.studentage=this.student.age
      }
    })
    this.route.queryParams.subscribe((qp:Params)=>{  
      this.allowEdit=qp['allowEdit']=== '1' ? true :false   
    })


  }
editStudent(){
this.studentService.updateStudent(this.id,this.studentname,this.studentage)
this.router.navigate(['/users'])
}
}
