import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentInterface } from 'src/Interfaces/Student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  students:StudentInterface[]=[]
  constructor(private studentService:StudentService ,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.students= this.studentService.getStudents()
  }

  UpgradeUser(index:number){   
    this.studentService.upgradetoAdmin(index)
    this.router.navigate(['../'], {relativeTo:this.route})
  }

}
