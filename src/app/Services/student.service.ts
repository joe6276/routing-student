import { Injectable } from '@angular/core';
import { StudentInterface } from 'src/Interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
students:StudentInterface[]=[
{
  id:'st',
  name:'Jonathan',
  age:12,
  role:'admin'
}
,
{
  id:'ab',
  name:'Ndambuki',
  age:13,
  role:'user'
},
{
  id:'cd',
  name:'Benard',
  age:14,
  role:'user'
}
,{
  id:'sa',
  name:'Teresia',
  age:11,
  role:'user'
}


]
  constructor() { }


getStudents(){
   return this.students
}
getStudent(id:string){
  return this.students.find((x)=>x.id===id)
}
addStudent(id:string, name:string, age :number){
  this.students.push({id,name,age,role:'user'})
}
deleteStudent(id:string){

  const index=this.students.findIndex(x=>x.id===id)
  this.students.splice(index,1)
}
updateStudent(id:string, newname:string,newage:number){
const student= this.students.find(x=>x.id===id)
if(student){
  student.name=newname
  student.age= newage
}
}


upgradetoAdmin(id:string){
  const user= this.students.find((x)=>x.id===id)
  if(user){
    user.role='admin'
  }
 
}
}
