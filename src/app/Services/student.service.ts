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
  role:'admin',
  img:'https://cdn.pixabay.com/photo/2019/07/29/04/35/student-4369850__340.jpg'
}
,
{
  id:'ab',
  name:'Ndambuki',
  age:13,
  role:'user',
  img:'https://cdn.pixabay.com/photo/2018/06/27/07/45/student-3500990__340.jpg'
},
{
  id:'cd',
  name:'Benard',
  age:14,
  role:'user',
  img:'https://cdn.pixabay.com/photo/2017/02/09/16/59/student-2052868__340.jpg'
}
,{
  id:'sa',
  name:'Teresia',
  age:11,
  role:'user',
  img:'https://cdn.pixabay.com/photo/2012/02/23/10/40/concentration-16032__340.jpg'
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
  this.students.push({id,img:'https://cdn.pixabay.com/photo/2018/06/27/07/45/student-3500990__340.jpg',name,age,role:'user'})
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
