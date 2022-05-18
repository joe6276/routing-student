import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { FilterPipe } from './Pipes/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
   EditUserComponent,
   UserComponent,
   AddStudentComponent,
   FooterComponent,
   UpgradeComponent,
   FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
