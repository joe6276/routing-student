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
getStudent(index:number){
  return this.students[index]
}
addStudent(id:string, name:string, age :number){
  this.students.push({id,name,age,role:'user'})
}
deleteStudent(index:number){
  this.students.splice(index,1)
}
updateStudent(index:number, newname:string,newage:number){
const student= this.getStudent(index)
student.name= newname
student.age= newage
}


upgradetoAdmin(index:number){
  const user= this.students[index]
  user.role='admin'
  return user
}
}
