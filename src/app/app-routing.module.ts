import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'add', component:AddStudentComponent},
  {path:'users', component:UsersComponent ,children:[
    {path:':id' ,component:UserComponent},
    {path:':id/edit',component:EditUserComponent}
  ]}
  ,
  {path:'upgrade', component:UpgradeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
